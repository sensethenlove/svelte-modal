import { SvelteComponentTyped } from "svelte";
import './modal.scss';
declare const __propDef: {
    props: {
        header?: string | undefined;
        onHideModal?: (() => void) | undefined;
    };
    events: {
        click: MouseEvent;
        functions: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ModalProps = typeof __propDef.props;
export type ModalEvents = typeof __propDef.events;
export type ModalSlots = typeof __propDef.slots;
export default class Modal extends SvelteComponentTyped<ModalProps, ModalEvents, ModalSlots> {
}
export {};
