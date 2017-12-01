class ApplicationError implements Error {
    constructor(public name: string, public message: string) {
	
    }
}

throw new ApplicationError('Example Error', 'An error has occurred');