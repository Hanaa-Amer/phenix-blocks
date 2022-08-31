//====> WP Modules <====//
import {
    PanelBody,
    SelectControl,
    ToggleControl
} from '@wordpress/components';

import {
    RichText,
    InnerBlocks,
    useBlockProps,
    useInnerBlocksProps,
    InspectorControls
} from '@wordpress/block-editor';

import { useState, useEffect } from '@wordpress/element';

//====> Phenix Modules <====//
import PhenixBackground from '../px-components/px-background';
import PhenixColor from '../px-components/px-colors';
import FlexAlignment from '../px-components/flex-alignment';

//====> Edit Mode <====//
export default function Edit({ attributes, setAttributes }) {
    //===> Set Settings <===//
    const set_size = size => setAttributes({ size });
    const set_color = color => setAttributes({ color });
    const set_tagName = tagName => setAttributes({ tagName });
    const set_isSection = isSection => setAttributes({ isSection });
    const set_isFlexbox = isFlexbox => setAttributes({ isFlexbox });
    const set_alignment = alignment => setAttributes({ flex_align : alignment });

    //===> Set Background <===//
    const set_background = background => {
        //=== Set New Value ===//
        setAttributes({ background : background.value });
        //===> Update Rotation <===//
        if (attributes.bg_type === 'gradient' && background.rotation) {
            setAttributes({bg_rotate : background.rotation});
        } else {
            setAttributes({ bg_type : background.type });
        }
    }

    //===> Get Block Properties <===//
    const blockProps = useBlockProps();
    const innerBlocksProps = useInnerBlocksProps();
    const TagName = attributes.tagName;

    //===> Set Phenix View <===//
    const setPhenixView = () => {
        //===> Check Site Editor <===//
        let siteEditor = window.frames['editor-canvas'],
            blockElement = '.px-media';

        //===> Get the Element from Site Editor <===//
        if (siteEditor) {
            blockElement = siteEditor.document.querySelectorAll('.px-media');
            blockElement = [...blockElement];
            Phenix(blockElement).multimedia();
        }

        //===> Set Background <===//
        if (!siteEditor) Phenix(blockElement).multimedia();
    }

    //===> Component is Ready <===//
    useEffect(() => {
        //===> Loading FontAwesome <===//
        if (window.frames['editor-canvas']) {
            let fontAwesome = document.querySelector("#fontawesome-css");
            if (fontAwesome) {
                //===> Check in the Editor <===//
                let canvasAwesome = window.frames['editor-canvas'].document.querySelector("#fontawesome-css");
    
                //===> if Font Awesome not Loaded <===//
                if (!canvasAwesome && fontAwesome) {
                    let newAwesome = document.importNode(fontAwesome, true);
                    window.frames['editor-canvas'].document.head.appendChild(newAwesome);
                }
            }
        }
    });

    //===> for Section Convert <===//
    let container_element = blockProps;
    if (attributes.isSection) container_element = innerBlocksProps;

    //===> Render Size <===//
    if (attributes.size) container_element.className += ` ${attributes.size}`;

    //===> Render Alignment <===//
    if (attributes.isFlexbox) {
        container_element.className += ' flexbox';
        if (attributes.flex_align) container_element.className +=` ${attributes.flex_align}`;
    }

    //===> Render Color <===//
    if (attributes.color) container_element.className += ` ${attributes.color}`;

    //===> Render Background <===//
    if (attributes.background) {
        //===> Image Background <===//
        if (attributes.bg_type === 'image') {
            blockProps.className += ` px-media`;
            blockProps["data-src"] = attributes.background;
            setPhenixView();
        }
        //===> Name Background <===//
        else blockProps.className += ` ${attributes.background}`;
    }

    //===> Render <===//
    return (<>
        {/*====> Controls Layout <====*/}
        <InspectorControls key="inspector">
            {/*===> Widget Panel <===*/}
            <PanelBody title="Section Settings">
                {/*=== Component <TagName> ===*/}
                <SelectControl key="tagName" label="HTML Tag" value={attributes.tagName} onChange={set_tagName} options={[
                    { label: 'Default <div>',  value: 'div' },
                    { label: 'Main <main>',  value: 'main' },
                    { label: 'Aside <aside>',  value: 'aside' },
                    { label: 'Section <section>',  value: 'section' },
                    { label: 'Header <header>', value: 'header' },
                    { label: 'Footer <footer>', value: 'footer' },
                ]}/>

                {/*=== Container Size ===*/}
                <SelectControl key="container_size" label="Container Size" value={attributes.size} onChange={set_size} options={[
                    { label: 'None',   value: '' },
                    { label: 'Small',  value: 'container-sm' },
                    { label: 'Medium', value: 'container-md' },
                    { label: 'Normal', value: 'container' },
                    { label: 'Large',  value: 'container-xl' },
                    { label: 'Full Width',  value: 'container-fluid' },
                ]}/>

                {/*=== isSection ===*/}
                <ToggleControl label="Section Wrapper" checked={attributes.isSection} onChange={set_isSection}/>

                {/*===  isFlexbox ===*/}
                <ToggleControl key="isFlexbox" label="Flex Container" checked={attributes.isFlexbox} onChange={set_isFlexbox}/>
            </PanelBody>
            {/*=== Container Options ===*/}
            {attributes.isFlexbox ? <PanelBody title="Flexbox" initialOpen={false}>
                {/*=== Flexbox Alignment ===*/}
                <FlexAlignment key="flex-align" value={attributes.flex_align} onChange={set_alignment}></FlexAlignment>
            </PanelBody> : null}
            {/*===> Widget Panel <===*/}
            <PanelBody title="Typography" initialOpen={false}>
                {/* Text Color */}
                <PhenixColor key="px-color" onChange={set_color} value={attributes.color} />
            </PanelBody>
            {/*===> Widget Panel <===*/}
            <PanelBody title="Background" initialOpen={false}>
                <PhenixBackground key="px-bg" onChange={set_background} type={attributes.bg_type} value={attributes.background} />
            </PanelBody>
            {/*===> End Widgets Panels <===*/}
        </InspectorControls>

        {/*====> Edit Layout <====*/}
        {attributes.preview ?
            <img src="https://raw.githubusercontent.com/EngCode/phenix-blocks/main/assets/img/prev/section.jpg" alt="" className="fluid" />
        :
        <TagName {...blockProps}>
            <div {...innerBlocksProps}></div>
        </TagName>
        }
    </>);
}