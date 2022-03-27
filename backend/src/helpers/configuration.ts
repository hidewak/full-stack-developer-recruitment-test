import parseArgs, { ParsedArgs } from 'minimist'

import { Configuration, DEFAULT_RANGE_DAYS } from '../types/configuration'

export const getConfiguration = (argv: string[]): Configuration => {
    const args = parseArgs(argv)

    const input = getInputFilePath(args._)
    const output = getOutputFilePath(args)
    const nbDays = getNbDAys(args)

    return { input, output, nbDays }
}

const getInputFilePath = (args: string[]): string => {
    if (args.length < 3) {
        throw new Error('Path to input file is missing\n usage `node dist/index.js path-to-file.json`')
    }

    return args[2]
}

const getOutputFilePath = (args: ParsedArgs): string => {
    return args.output || 'calendar'
}

const getNbDAys = (args: ParsedArgs): number => {
    if (args.nb_days === undefined) {
        return DEFAULT_RANGE_DAYS
    }

    let nbDays = args.nb_days

    if (typeof args.nb_days !== 'number') {
        nbDays = parseInt(args.nb_days, 10)

        if (isNaN(nbDays)) {
            throw new Error('Number of days must be a number\n usage `node dist/index.js path-to-file.json --nb-days 3`')
        }
    }

    if (nbDays < 1) {
        throw new Error('Number of days must be greater than 0\n usage `node dist/index.js path-to-file.json --nb-days 3`')
    }

    return nbDays
}