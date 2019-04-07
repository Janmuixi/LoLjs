
api_key = 'RGAPI-1b555041-bcf4-43e7-b0ef-70667deca827'

async function fetchAsync () {
    console.log(getChampNameById(5))
    console.log(getCurrentVersionFromRealm("na"))
}

async function getChampNameById(champId) {
    url = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json'

    let response = await fetch(url)
    let data = await response.json()
    let datos = data["data"]
    let champName = null
    for (champ in datos) {
        let key = datos[champ].key
        if (key == champId) {
            champName = datos[champ].id
        }
    }
    return champName != null ? champName : null
}

async function getCurrentVersionFromRealm(realm) {
    if (isNaN(realm)) {
        if (realm.trim.lenght != 0) {
            url = "https://ddragon.leagueoflegends.com/realms/" + realm + ".json"
        
            let response = await fetch(url)
            let data = await response.json()
            let version = data["v"]
    
            return version != null ? version : null
        }
    }
    return null
}

async 
