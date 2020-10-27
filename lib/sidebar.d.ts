import React from 'react'

export type SidebarProps={
    /**
     * ID of main components
     */
    id: string;
    /**
     * Type of sticky sidebar
     *
     * top: Always sticky
     *
     * bottom: Based on scroll
     */
    type?: 'bottom'|'top';
    /**
     * Offset top if there is a header component
     *
     * Default: 84
     */
    offsetTop?: number;
    /**
     * Minimum width of windows (Based on your responsive template)
     * 
     * Default: 960
     */
    minWidth?: number;
    /**
     * Sidebar Component
     */
    children?: React.ReactNode;
}

/**
 * 
 * React Sticky Sidebar Component
 * 
 * Homepage: [Portalnesia](https://portalnesia.com)
 * 
 * Example : Any pages in [Portalnesia Chord](https://portalnesia.com/chord)
 * 
 */
declare const Sidebar: React.FunctionComponent<SidebarProps>
export default Sidebar
