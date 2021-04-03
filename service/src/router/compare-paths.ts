import { Controller } from '../controllers/controller'

const splitPath = (path: string) => path.split('/').filter((x: string) => x)

type AnyController = Controller<any, any, any>

export const comparePaths = (controller1: AnyController, controller2: AnyController): number => {
    const elements1 = splitPath(controller1.route.path)
    const elements2 = splitPath(controller2.route.path)

    if (elements1.length === elements2.length) {
        // True, when the last element of the path is a parameter
        const hasParam1 = elements1.slice(-1)[0].startsWith(':')
        const hasParam2 = elements2.slice(-1)[0].startsWith(':')

        // If both paths have the same length & they both end with
        // a parameter, they are sorted alphabetically by the element
        // *preceding* the last parameter.
        if (hasParam1 && hasParam2) {
            return elements1[elements1.length - 2].localeCompare(
                elements2[elements2.length - 2]
            )
        }

        // If none of them ends with a parameter, the *last* element
        // has to be compared alphabetically.
        if (!hasParam1 && !hasParam2) {
            return controller1.route.path.localeCompare(controller2.route.path)
        }

        // If both paths have the same length, the path ending with a parameter
        // has a lower priority (1) than the other one (-1).
        return hasParam1 ? 1 : -1
    }

    // Shorter paths have a higher priority than longer paths
    return elements1.length - elements2.length
}
