import axiosResource from "./axios";

export class Api {
    static async getAllStores () {
        try {
            const response = await axiosResource.get()
            return response.data
        }
        catch (err) {
            /**
             * NetworkError
             */
            console.log(err)
            return 0;
        }
    }
}