'use client';
import { Session } from 'next-auth';
import {SessionProvider as Provider} from 'next-auth/react';

type Prop = {
    children: React.ReactNode;
    session: Session | null;
}

export default function SessionProvider({children,session} : Prop){
    return (
        <Provider session={session}>
            {children}
        </Provider>
    )
}