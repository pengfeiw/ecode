import React, { useState, useEffect } from "react";

const useEffectState = <S, R = S>(effect: S, getState?: (effect: S) => R) => {
    const [state, setState] = useState<S | R>(getState === undefined ? effect : getState(effect));

    useEffect(() => {
        setState(getState === undefined ? effect : getState(effect));
    }, [effect]);

    return [state, setState] as [R, React.Dispatch<React.SetStateAction<R>>];
};

export default useEffectState;
