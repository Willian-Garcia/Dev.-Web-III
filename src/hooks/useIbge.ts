import { useContext } from "react";
import { ContextIBGE } from "../contexts/ContextIbge";

export default function useIbge() {
    return useContext(ContextIBGE);
}