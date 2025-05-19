import { useState, useEffect } from "react";
import { UserData } from "@/dtos/types/UserData.dto"

export function UseRecoveryData(Key = "user"): UserData | null {
    const [data, setData] = useState(null);

    useEffect(() => {
        const stored = localStorage.getItem(Key);
        if ( stored ) {
            try {
                setData(JSON.parse(stored));
            } catch {
                setData(null);
            }
        }
    }, [Key]);

    return data;
}