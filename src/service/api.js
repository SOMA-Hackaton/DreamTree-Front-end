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

    static async getStoresByPosition (latitude, logitude, distance) {
        try {
            const response = await axiosResource.get('/location', {
                params: {
                    latitude,
                    logitude,
                    distance
                }
            });
            return response.data
        }
        catch (err) {
            /**
             * NetworkError
             */
            console.log(err);
            return 0;
        }
    }

    static async getStoresByName(storename) {
        try {
            const response = await axiosResource.get('/keyword', {
                params: {
                    storename
                }
            });
            return response.data
        }
        catch (err) {
            /**
             * NetworkError
             */
            console.log(err);
            return 0;
        }
    }
}