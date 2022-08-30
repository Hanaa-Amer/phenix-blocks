//====> WP Modules <====//
import {
    PanelBody,
    SelectControl,
    ToggleControl,
    TextControl
} from '@wordpress/components';

import {
    InnerBlocks,
    useBlockProps,
    InspectorControls
} from '@wordpress/block-editor';

import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

//====> Phenix Modules <====//
import MediaUploader from '../px-components/media-uploader';

//====> Edit Mode <====//
export default function Edit({ attributes, setAttributes }) {
    //===> Set Attributes <===//
    const set_resposnive = resposnive => setAttributes({ resposnive });
    const set_size = size => setAttributes({ size });
    const set_use_fevicon = use_fevicon => setAttributes({ use_fevicon });
    const set_mobile_logo = mobile_logo => setAttributes({ mobile_logo: mobile_logo.url });

    //===> Set Logo <===//
    const set_logo = value => {
        //===> Set Attribute <===//
        setAttributes({ logo: value.url })
        //===> Set Fevicon in Settings <===//
        apiFetch( {
            method: 'POST',
            path: '/wp/v2/settings',
            data: { site_logo : value.id },
        }).then(respond => {
            console.log(respond);
        });
    }

    //===> Set Fevicon <===//
    const set_fevicon = value => {
        //===> Set Attribute <===//
        setAttributes({ fevicon: value.url })
        //===> Set Fevicon in Settings <===//
        apiFetch( {
            path: '/wp/v2/settings',
            method: 'POST',
            data: { site_icon : value.id },
        }).then(respond => {
            console.log(respond);
        });
    };

    //===> Get Block Properties <===//
    const blockProps = useBlockProps();

    //===> if the Title not Set <===//
    if (attributes.title !== "Site Title" || attributes.link === "javascript:void(0);") {
        //===> Fetch Settings <===//
        apiFetch({path: '/wp/v2/settings'}).then(settings => {
            //===> Set Attributes <===//
            setAttributes({
                link  : settings.url,
                title : settings.title
            });
        });
    }

    //===> Add Properties <===//
    blockProps["href"]  = "javascript:void(0);";
    blockProps["title"] = attributes.title;

    //===> Render <===//
    return (<>
        {/* //====> Controls Layout <====// */}
        <InspectorControls key="inspector">
            {/*===> Widget Panel <===*/}
            <PanelBody title="Logo Setting" initialOpen={true}>
                {/* Size */}
                <TextControl label="Logo Size" value={attributes.size} onChange={set_size}></TextControl>
                {/* Divider */}
                <span className='display-block border-alpha-05 bg-alpha-05 col-12 mb-15 mt-5 divider-t'></span>
                {/* Logo */}
                <MediaUploader label="Upload Logo" value={attributes.logo} setValue={set_logo} size="small"></MediaUploader>
                {/* Divider */}
                <span className='display-block border-alpha-05 bg-alpha-05 col-12 mb-15 mt-5 divider-t'></span>
                {/* Fevicon */}
                <MediaUploader label="Upload Fevicon" value={attributes.fevicon} setValue={set_fevicon} size="small"></MediaUploader>
                {/* Divider */}
                <span className='display-block border-alpha-05 bg-alpha-05 col-12 mb-15 mt-5 divider-t'></span>
                {/*=== Responsive ===*/}
                <ToggleControl label="Responsive Logo" checked={attributes.resposnive} onChange={set_resposnive}/>
                {/*=== Responsive [...] ===*/}
                {attributes.resposnive ? <>
                    <ToggleControl label="Use Fevicon for Mobile" checked={attributes.use_fevicon} onChange={set_use_fevicon}/>
                    {/* Fevicon */}
                    {!attributes.use_fevicon ? <MediaUploader label="Upload Mobile Logo" value={attributes.mobile_logo} setValue={set_mobile_logo} size="small"></MediaUploader> : null}
                </> : null}
            </PanelBody>
            {/*===> End Widgets Panels <===*/}
        </InspectorControls>

        {/* //====> Edit Layout <====// */}
        <a { ...blockProps }>
            <img src={attributes.logo} className={attributes.resposnive ? 'hidden-md-down' : ''} alt={blockProps.title} style={{ "height": attributes.size }} />
            {attributes.resposnive ?  <img src={attributes.use_fevicon ? attributes.fevicon : attributes.mobile_logo} className='hidden-lg-up' alt={blockProps.title} style={{ "height": attributes.size }} /> : null}
        </a>
    </>);
}