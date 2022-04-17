const apiKey = 'rpQViuBaERdT3uyc3GXY96XXScDgxBK9';
const request = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

export const getImage = async () => {
    // With async await you need use try and catch for errors
    try {
        const resp = await request;
        const { data } = await resp.json();
        const { url } = data.images.original;
        return url;
    } catch (error) {
        // manejo del error
        return 'No existe';
    }
}