const Api_Url = 'https://api.tvmaze.com';

export async function getApi(query){
    const resp = await fetch(`${Api_Url}${query}`)
    .then(res => res.json())
    return resp;
}