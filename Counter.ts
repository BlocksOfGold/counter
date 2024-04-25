let counter = 0

//% block="Counter" weight=100 color=#333 icon=""
namespace code {

    //%block="Count"
    export function count(): void {
        counter++
    }

    //%block="Log Counter"
    export function logcount(): void {
        console.log(counter)
    }

    //%block="Counter"
    export function counterobj(): number {
        return counter
    }

    //%block="Count By: $value"
    export function countby(value: number): void {
        counter += value
        if (counter < 0) {
            counter = 0
        }
    }

    //%block="Reset Counter"
    export function resetcounter(): void {
        counter = 0
    }

    //%block="Set Counter To: $value"
    export function setcounter(value: number): void {
        counter = value
        if (counter < 0) {
            counter = 0
        }
    }

    //%block="Decrease Counter"
    export function decrease(): void {
        counter -= 1
        if (counter < 0) {
            counter = 0
        }
    }
}