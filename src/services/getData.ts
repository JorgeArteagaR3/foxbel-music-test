export const getData = async (url: string) => {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const res = await fetch(proxyUrl + url);
    if (!res.ok) {
        throw new Error(`API ERROR`);
    }
    const data = await res.json();
    return data;
};
