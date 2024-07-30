import { atom } from "recoil";
import { removeItem, setItem } from "../../utils/AsyncStorageUtils";

const AsyncStorageEffect = key => async ({setSelf, onSet})  => {
    const savedValue = await get(key);

    if(savedValue !== null){
        setSelf(JSON.parse(savedValue))
    }

    onSet((newValue, _, isReset) => {
        console.log('onSet',newValue);
        isReset ? 
            removeItem(key) 
            : setItem(key,JSON.stringify(newValue))
    })
}

export const atomLinkList = atom({
    key:'MAIN/LINK_LIST',
    default: {
        list: [],
    },
    effects:[AsyncStorageEffect('MAIN/LINK_LIST')]
})