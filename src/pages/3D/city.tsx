
import { useCallback, useEffect } from "react";
import { initCity } from "../../utils/effect/enter";
export default function City(){
    useEffect(()=>{
        initCity()
    })
    return (
        <div className="city_box" id="gl">
        </div>
    );
}