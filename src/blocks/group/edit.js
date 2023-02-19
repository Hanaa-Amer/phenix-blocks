//====> WP Modules <====//
import { __ } from '@wordpress/i18n';

import {
    PanelBody,
    TextControl,
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
import PhenixColor from '../px-controls/colors/text';
import OptionControl from '../px-controls/switch';
import FlexAlignment from '../px-controls/grid/alignment';
import PhenixBackground from '../px-controls/colors/background';

//====> Edit Mode <====//
export default function Edit({ attributes, setAttributes }) {
    //===> Set Settings <===//
    const set_id = id => setAttributes({ id });
    const set_tagName = tagName => setAttributes({ tagName });
    const set_isFlexbox = isFlexbox => setAttributes({ isFlexbox });

    //===> Get Options <===//
    let flexbox_options = attributes.flexbox,
        style_options = attributes.style,
        background = style_options?.background,
        typography = attributes.typography;
    
    //===> Default Typography <===//
    // if(typography) {
    //     if(!typography.size)   typography.size = "";
    //     if(!typography.color)  typography.color = "";
    //     if(!typography.weight) typography.weight = "";
    //     if(!typography.align)  typography.align  = "";
    // }

    //===> Default Style <===//
    // if(style_options) {
    //     //===> Flexbox <===//
    //     if (!style_options.flexbox) style_options.flexbox = {};
    //     if (!style_options.flexbox.align)   flexbox_options.align = "";
    //     if (!style_options.flexbox.flow)    flexbox_options.flow = "";
    //     if (!style_options.flexbox.nowrap)  flexbox_options.nowrap = "";
    //     if (!style_options.flexbox.stacked) flexbox_options.stacked = "";

    //     //===> Background <===//
    //     if (!style_options.background) style_options.background = {};
    //     if (!style_options.background.value)  typography.value  = "";
    //     if (!style_options.background.rotate) typography.rotate = "";
    //     if (!style_options.background.type)   typography.type = "color";
    // }

    //===> Flexbox Options <===//
    const set_alignment = alignment => {
        //==> Align <==//
        flexbox_options.align = alignment;
        setAttributes({ flexbox : {...flexbox_options} });
    };

    //==> Flow <==//
    const set_flex_flow = target => {
        flexbox_options.flow = target.checked ? target.value : "";
        setAttributes({flexbox : {...flexbox_options}});
    };

    //==> No-Wrap <==//
    const set_flex_nowrap = target => {
        flexbox_options.nowrap = target.checked ? target.value : "";
        setAttributes({flexbox : {...flexbox_options}});
    };

    //==> Flow Columns <==//
    const set_flex_stacked = target => {
        flexbox_options.stacked = target.checked ? target.value : "";        
        setAttributes({flexbox : {...flexbox_options}});
    };

    //===> Typography Options <===//
    const set_typography_size = value => {
        //==> Size <==//
        typography.size = value;
        setAttributes({ typography : {...typography} });
    };

    //==> Weight <==//
    const set_typography_weight = value => {
        typography.weight = value;
        setAttributes({ typography : {...typography} });
    };

    //==> Align <==//
    const set_typography_align = target => {
        typography.align = target.checked ? target.value : "";
        setAttributes({ typography : {...typography} });
    };

    //==> Color <==//
    const set_color = value => {
        typography.color = value;
        setAttributes({ typography : {...typography} });
    };

    //===> Set Background <===//
    const set_background = background => {
        style_options.background = background;
        setAttributes({ style : {...style_options} });
    };

    //===> Get Block Properties <===//
    const blockProps = useBlockProps();
    const innerBlocksProps = useInnerBlocksProps();
    const TagName = attributes.tagName;

    //===> Set Phenix Components <===//
    const setPhenixView = () => {
        //===> Check Site Editor <===//
        let siteEditor = window.frames['editor-canvas'],
            blockElement = '.px-media';

        //===> Correct Editor Target for Site-Editor <===//
        if (siteEditor) {
            blockElement = siteEditor.document.querySelectorAll('.px-media');
            blockElement = [...blockElement];
        }

        //===> Set Background <===//
        if (background?.type === 'image') Phenix(blockElement).multimedia();
    }

    useEffect(() => setPhenixView(), [attributes]);

    //===> Flexbox Options <===//
    let container = blockProps;
    if (attributes.isFlexbox) container = innerBlocksProps;

    //===> Flexbox Properties <===//
    if (attributes.isFlexbox) {
        container.className += ' flexbox';
        if (flexbox_options.align)  container.className += ` ${flexbox_options.align}`;
        if (flexbox_options.flow)   container.className += ` ${flexbox_options.flow}`;
        if (flexbox_options.nowrap) container.className += ` ${flexbox_options.nowrap}`;
        if (flexbox_options.stacked) container.className += ` ${flexbox_options.stacked}`;
    }

    //===> Typography Properties <===//
    if (typography) {
        if(typography.size) container.className += ` ${typography.size}`;
        if(typography.color) container.className += ` ${typography.color}`;
        if(typography.weight) container.className += ` ${typography.weight}`;
        if(typography.align) container.className += ` ${typography.align}`;
    }

    //===> Render Background <===//
    if (background?.value) {
        //===> Image Background <===//
        if (background.type === 'image') {
            blockProps.className += ` px-media`;
            blockProps["data-src"] = background.value;
        }

        //===> Name Background <===//
        else blockProps.className += ` ${background.value}`;

        //===> Background Rotation <===//
        if (background.rotate) blockProps.className += ` ${background.rotate}`;
    }

    //===> Render <===//
    return (<>
        {/*====> Controls Layout <====*/}
        <InspectorControls key="inspector">
            {/*===> Widget Panel <===*/}
            <PanelBody title="General Settings">
                {/*===> Elements Group <===*/}
                <div className='row gpx-20'>
                    {/*===> HTML Tag <===*/}
                    <div className='col-6 mb-10'>
                        <SelectControl key="tagName" label={__("HTML Tag", "phenix")} value={attributes.tagName} onChange={set_tagName} options={[
                            { label: '<div>',  value: 'div' },
                            { label: '<main>',  value: 'main' },
                            { label: '<aside>',  value: 'aside' },
                            { label: '<section>',  value: 'section' },
                            { label: '<header>', value: 'header' },
                            { label: '<footer>', value: 'footer' },
                        ]}/>
                    </div>
                    {/*===  isFlexbox ===*/}
                    <div className='col-6 mb-5'>
                        <TextControl key="container_id" label={__("HTML ID [Anchor]", "phenix")} value={ attributes.id } onChange={set_id}/>
                    </div>
                    {/*=== Container ID ===*/}
                    <div className='col-12'>
                        <ToggleControl key="isFlexbox" label={__("Flexbox", "phenix")} checked={attributes.isFlexbox} onChange={set_isFlexbox}/>
                    </div>
                    {/*===> // Column <===*/}
                </div>
            </PanelBody>
            {/*===> Typography <===*/}
            <PanelBody title={__("Typography", "phenix")} initialOpen={false}>
                {/*===> Elements Group <===*/}
                <div className='row gpx-20'>
                    {/*===> Size <===*/}
                    <div className='col-6 mb-10'>
                        <SelectControl key="typography-size" label={__("Font Size", "phenix")} value={typography.size || ""} onChange={set_typography_size} options={[
                            { label: 'Default',   value: '' },
                            { label: '12px',   value: 'fs-12' },
                            { label: '13px',   value: 'fs-13' },
                            { label: '14px',   value: 'fs-14' },
                            { label: '15px',   value: 'fs-15' },
                            { label: '16px',   value: 'fs-16' },
                            { label: '17px',   value: 'fs-17' },
                            { label: '18px',   value: 'fs-18' },
                            { label: '19px',   value: 'fs-19' },
                            { label: '20px',   value: 'fs-20' },
                            { label: '22px',   value: 'fs-22' },
                            { label: '24px',   value: 'fs-24' },
                            { label: '25px',   value: 'fs-25' },
                            { label: '26px',   value: 'fs-26' },
                            { label: '28px',   value: 'fs-28' },
                            { label: '30px',   value: 'fs-30' },
                        ]}/>
                    </div>
                    {/*===> HTML Tag <===*/}
                    <div className='col-6 mb-10'>
                        <SelectControl key="typography-weight" label={__("Font Weight", "phenix")} value={typography.weight || ""} onChange={set_typography_weight} options={[
                            { label: 'Default',  value: '' },
                            { label: 'Thin',  value: 'weight-thin'},
                            { label: 'Light',  value: 'weight-light'},
                            { label: 'Extra Light',  value: 'weight-xlight'},
                            { label: 'Normal',  value: 'weight-normal'},
                            { label: 'Medium',  value: 'weight-medium'},
                            { label: 'Semi-Bold',  value: 'weight-bold'},
                            { label: 'Bold',  value: 'weight-strong'},
                            { label: 'Heavy',  value: 'weight-xbold'},
                            { label: 'Black',  value: 'weight-black'},
                        ]}/>
                    </div>
                    {/*===> // Column <===*/}
                </div>
                {/*===> Text Color <===*/}
                <PhenixColor key="px-color" label={__("Text Color", "phenix")} onChange={set_color} value={typography.color || ""} />
                {/*===> Label <===*/}
                <label className='col-12 mb-5 tx-UpperCase'>{__("Text Alignment", "phenix")}</label>
                {/*===> Elements Group <===*/}
                <div className='flexbox'>
                    {/*===> Switch Button <===*/}
                    <OptionControl name='text-align' checked={!typography.align || typography.align === ""} value={""} onChange={set_typography_align} type='button-radio' className='small me-5'>
                        <span className='btn small square outline gray far fa-align-slash radius-sm'></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name='text-align' checked={typography.align === "tx-align-start" ? true : false} value={"tx-align-start"} onChange={set_typography_align} type='button-radio' className='small me-5'>
                        <span className={`btn small square outline gray fs-17 far fa-align-${Phenix(document).direction() === "ltr" ? 'left' : "right"} radius-sm`}></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name='text-align' checked={typography.align === "tx-align-justify" ? true : false} value={"tx-align-justify"} onChange={set_typography_align} type='button-radio' className='small me-5'>
                        <span className={`btn small square outline gray fs-17 far fa-align-justify radius-sm`}></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name='text-align' checked={typography.align === "tx-align-center" ? true : false} value={"tx-align-center"} onChange={set_typography_align} type='button-radio' className='small me-5'>
                        <span className={`btn small square outline gray fs-17 far fa-align-center radius-sm`}></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name='text-align' checked={typography.align === "tx-align-end" ? true : false} value={"tx-align-end"} onChange={set_typography_align} type='button-radio' className='small'>
                        <span className={`btn small square outline gray fs-17 far fa-align-${Phenix(document).direction() === "rtl" ? 'left' : "right"} radius-sm`}></span>
                    </OptionControl>
                </div>
            </PanelBody>
            {/*===> Style Options <===*/}
            <PanelBody title={__("Style Options", "phenix")} initialOpen={false}>
                {/*===> Background <===*/}
                <PhenixBackground key="px-bg" label={__("Background", "phenix")}  onChange={set_background} type={style_options.background?.type || "color"} value={style_options.background?.value || ""} rotate={style_options.background?.rotate || null} />

                {/*===> Flexbox Properties <===*/}
                {attributes.isFlexbox ?
                    <div className='row gpx-15 divider-t pdt-10'>
                        {/*===> Column <===*/}
                        <div className='col-12 mb-15'>
                            <FlexAlignment label={__("Flexbox Alignment", "phenix")} value={flexbox_options.align || ""} onChange={set_alignment}></FlexAlignment>
                        </div>
                        {/*===> Column <===*/}
                        <div className='col-12 flexbox align-between mb-15'>
                            {/*===> Label <===*/}
                            <label className='col-12 mb-5 tx-UpperCase'>{__("Flow Options", "phenix")}</label>
                            {/*===> Switch Button <===*/}
                            <OptionControl name='flex-flow' value={!flexbox_options.stacked || flexbox_options.stacked === "" ? `flow-reverse` : "flow-columns-reverse"} checked={flexbox_options.flow?.length > 0} onChange={set_flex_flow} type='checkbox' className='tiny'>
                                <span className='fas fa-check radius-circle'>{__("Reverse ", "phenix")}</span>
                            </OptionControl>
                            {/*===> Switch Button <===*/}
                            <OptionControl name='flex-columns' value="flow-columns" checked={flexbox_options.stacked?.length > 0} onChange={set_flex_stacked} type='checkbox' className='tiny'>
                                <span className='fas fa-check radius-circle'>{__("Stacked", "phenix")}</span>
                            </OptionControl>
                            {/*===> Switch Button <===*/}
                            <OptionControl name='flex-nowrap' value="flow-nowrap" checked={flexbox_options.nowrap?.length > 0} onChange={set_flex_nowrap} type='checkbox' className='tiny'>
                                <span className='fas fa-check radius-circle'>{__("Nowrap", "phenix")}</span>
                            </OptionControl>
                        </div>
                        {/*===> // Column <===*/}
                    </div>
                : null}
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