import React, { useCallback, useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { getItem } from "../utils/AsyncStorageUtils";
import { atomLinkList } from "./states/atomLinkList";

export const RecoilCustomPersist = (props) => {
    const [isLoaded, setIsLoded] = useState(false);
    const setList = useSetRecoilState(atomLinkList);

    const loadData = useCallback(async() => {
        const data = await getItem('MAIN/LINK_LIST');

        if(data !== null) {
            setList(JSON.parse(data));
        }

        setIsLoded(true);
    },[])

    useEffect(() => {
        if(isLoaded) return;
        
        loadData();
    }, [])

    return(
        <>
            {isLoaded && props.children}
        </>
    )
}