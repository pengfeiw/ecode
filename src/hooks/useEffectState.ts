import React, { useState, useEffect } from "react";

const useEffectState = <S>(effect: S) => {
    const [state, setState] = useState<S>(effect);

    useEffect(() => {
        setState(effect);
    }, [effect]);

    return [state, setState] as [S, React.Dispatch<React.SetStateAction<S>>];
};

export default useEffectState;
