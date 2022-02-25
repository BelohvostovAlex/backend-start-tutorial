import {v4} from 'uuid'
import * as path from 'path'

class FileService {
    saveFile(file) {
        try {
            const fileName = v4() + '.jpg'
            const filePath = path.resolve('static', fileName)
            file.mv(filePath)
            return fileName
        } catch (error) {
            console.log(error.message)
        }
    }
}

export default new FileService()