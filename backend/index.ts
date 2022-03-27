import { hrtime } from "process"

import { getConfiguration } from "./src/helpers/configuration"
import { getInput, writeOutput } from "./src/helpers/file"
import { generate } from "./src/helpers/session"

(async _ => {
    try {
        const start = hrtime.bigint()

        const config = getConfiguration(process.argv)
        const input = await getInput(config)
        const output = await generate(input, config.nbDays)
        await writeOutput(config.output, output)

        console.log(`${ config.output }.json generated for ${ config.nbDays } day${ config.nbDays > 1 ? 's' : '' } in ${ hrtime.bigint() - start }ns`)
    } catch (e: any) {
        console.log(e.message)
    }
})()