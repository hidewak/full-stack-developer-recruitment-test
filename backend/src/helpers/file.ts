import { readFile, writeFile } from "fs/promises"

import { Configuration } from "../types/configuration"
import { Input, isInput } from "../types/input"
import { Output } from "../types/output"

export const getInput = async (config: Configuration): Promise<Input> => {

    const file = await getFile(config.input)

    if (!isInput(file)) {
        throw new Error('Input file does not have a correct format')
    }

    return file
}

const getFile = async (path: string): Promise<object> => {
    let data

    try {
        data = await readFile(path, { encoding: 'utf-8' })
    } catch (e) {
        throw new Error('Could not open input file\n usage `node dist/index.js path-to-file.json`')
    }

    let obj
    
    try {
        obj = JSON.parse(data)
    } catch (e) {
        throw new Error('Input file is not a valid JSON')
    }

    return obj
}

export const writeOutput = async (path: string, output: Output) => {
    try {
        await writeFile(`${ path }.json`, JSON.stringify(output))
    } catch (e) {
        throw e
    }
}