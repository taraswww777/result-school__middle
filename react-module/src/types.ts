import {FC, ReactNode} from "react";

export type CFC<TProps = {}> = FC<{
    children?: ReactNode
} & TProps>