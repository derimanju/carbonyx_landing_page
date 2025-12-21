"use client";

import { useEffect, useRef } from "react";
import { supabase } from "@/lib/supabase";

export function PageLogger() {
    const logged = useRef(false);

    useEffect(() => {
        const logVisit = async () => {
            if (logged.current) return;
            logged.current = true;

            try {
                const { error } = await supabase.from('access_logs').insert({
                    event_type: 'page_view',
                    user_agent: window.navigator.userAgent,
                    referrer: document.referrer,
                    url: window.location.href,
                    // If you have IP tracking middleware, you'd pass it here, 
                    // but for client-side only, we rely on what's available or DB default.
                });

                if (error) {
                    console.error("Failed to log visit:", error);
                } else {
                    console.log("Visit logged successfully.");
                }
            } catch (err) {
                console.error("Error logging visit:", err);
            }
        };

        logVisit();
    }, []);

    return null; // Invisible component
}
