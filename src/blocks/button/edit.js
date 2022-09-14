//====> WP Modules <====//
import {
    PanelBody,
    SelectControl,
    ToggleControl,
    TextControl,
    __experimentalRadio as Radio,
    __experimentalRadioGroup as RadioGroup,
} from '@wordpress/components';

import {
    RichText,
    useBlockProps,
    useInnerBlocksProps,
    InspectorControls,
    __experimentalLinkControlSearchInput as LinkControlSearchInput
} from '@wordpress/block-editor';

import PhenixBackground from '../px-controls/px-background';
import PhenixColor from '../px-controls/px-colors';

import { useState, useEffect } from '@wordpress/element';

//====> Edit Mode <====//
export default function Edit({ attributes, setAttributes }) {
    //===> Set Settings <===//
    const set_label = label => setAttributes({ label });
    const set_outline = outline => setAttributes({ outline });
    const set_iconLabel = iconLabel => setAttributes({ iconLabel });
    const set_iconEnd = iconEnd => setAttributes({ iconEnd });
    const set_data_id = data_id => setAttributes({ data_id });
    const set_data_modal = data_modal => setAttributes({ data_modal });
    const set_color = color => setAttributes({ color });
    const set_size = size => setAttributes({size});
    const set_type = type => setAttributes({type});
    const set_radius = radius => setAttributes({radius});

    //===> Link Settings <===//
    const set_isLink = isLink => setAttributes({ isLink });
    const set_inNewTab = inNewTab => setAttributes({ inNewTab });
    const set_url = url => setAttributes({ url });

    //===> Set Background <===//
    const set_background = background => {
        //===> Adjust Primary Colors <===//
        let primaryColors = ["bg-primary", "bg-secondary", "bg-gray", "bg-dark", "bg-white", "bg-success", "bg-danger", "bg-warning", "bg-info"];
        if (primaryColors.includes(background.value)) {
            background.value = background.value.replace('bg-', '');
        }

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
    const labelControl = <RichText value={ attributes.label } onChange={set_label} tagName="span" placeholder="TXT" className="mg-0 pd-0"/>;

    //===> Set Default Values <===//
    const setDefault = () => {
        //===> Main Names <===//
        blockProps.className += ` btn`;

        //===> Color/Background <===//
        if (attributes.background) {
            //===> Background Rotation <===//
            if (attributes.bg_rotate) blockProps.className += ` ${attributes.bg_rotate}`;

            //===> Image Background <===//
            if (attributes.bg_type === 'image') {
                blockProps.className += ` px-media`;
                blockProps["data-src"] = attributes.background;
                setPhenixView();
            }
            //===> Name Background <===//
            else blockProps.className += ` ${attributes.background}`;
        }

        if (attributes.color) blockProps.className += ` ${attributes.color}`;

        //===> Default Type <===//
        if (attributes.type) blockProps.className += ` ${attributes.type}`;

        //===> Default Size <===//
        if (attributes.size) blockProps.className += ` ${attributes.size}`;

        //===> Default Radius <===//
        if (attributes.radius) blockProps.className += ` ${attributes.radius}`;

        //===> Default Style <===//
        if (attributes.outline) blockProps.className += ` outline`;
    }

    setDefault();

    //===> Set JS URL <===//
    if (attributes.isLink) blockProps['href'] = "#none";

    const suggestionsRender = (props) => (
        <ul className="fluid reset-list bg-white bx-shadow-dp-1 border-1 border-solid border-alpha-10 z-index-dropdown position-ab pos-start-0 pos-after-y">
            {props.suggestions.map((suggestion, index) => {
                    return (
                        <li className="pdx-15 pdy-5 fs-12 divider-b mouse-pointer" onClick={() => props.handleSuggestionClick(suggestion)}>
                            <strong>{suggestion.title}</strong>
                            <span className='display-block fs-10 color-primary tx-nowrap'>{suggestion.url}</span>
                        </li>
                    )
                })
            }
        </ul>
    );

    //===> Render <===//
    return (<>
        {/* //====> Controls Layout <====// */}
        <InspectorControls key="inspector">
            {/*===> Widget Panel <===*/}
            <PanelBody title="Settings">
                {/*=== Button Type ===*/}
                <label className='mb-10 weight-medium'>Button Type</label>
                <RadioGroup label="Button Type" onChange={ set_type } defaultChecked={attributes.type}>
                    <Radio value="normal">Default</Radio>
                    <Radio value="square">icon only</Radio>
                    <Radio value="75">with icon</Radio>
                </RadioGroup>

                {/* Divider */}
                <span className='display-block border-alpha-05 bg-alpha-05 col-12 my-15 divider-t'></span>

                {/*=== Button Size ===*/}
                <label className='mb-10 weight-medium'>Button Size</label>
                <RadioGroup label="Button Size" onChange={ set_size } defaultChecked={attributes.size}>
                    <Radio value="normal">Default</Radio>
                    <Radio value="tiny">XS</Radio>
                    <Radio value="small">SM</Radio>
                    <Radio value="large">LG</Radio>
                    <Radio value="xlarge">XL</Radio>
                </RadioGroup>

                {/* Divider */}
                <span className='display-block border-alpha-05 bg-alpha-05 col-12 my-15 divider-t'></span>

                {/*=== Button Size ===*/}
                <label className='mb-10 weight-medium'>Border Radius</label>
                <RadioGroup label="Button Size" onChange={ set_radius } defaultChecked={attributes.radius}>
                    <Radio value="radius-none">NO</Radio>
                    <Radio value="radius-sm">XS</Radio>
                    <Radio value="radius-md">SM</Radio>
                    <Radio value="radius-lg">LG</Radio>
                    <Radio value="radius-xl">XL</Radio>
                    <Radio value="radius-xxl">XXL</Radio>
                    <Radio value="radius-circle">Full Circle</Radio>
                    <Radio value="radius-height">Full Round</Radio>
                </RadioGroup>

                {/* Divider */}
                <span className='display-block border-alpha-05 bg-alpha-05 col-12 my-15 divider-t'></span>

                {/*=== isOutline ===*/}
                <ToggleControl label="Outline Style" checked={attributes.outline} onChange={set_outline}/>

                {/*=== isLink ===*/}
                <ToggleControl label="Link Button" checked={attributes.isLink} onChange={set_isLink}/>

                {/*=== Icon Settings ===*/}
                {attributes.type === 'btn-icon' ? <>
                    <ToggleControl label="Icon as Label" checked={attributes.iconLabel} onChange={set_iconLabel}/>
                    <ToggleControl label="Icon in the End" checked={attributes.iconEnd} onChange={set_iconEnd}/>
                </>: null}
            </PanelBody>
            {/*===> Widget Panel <===*/}
            {attributes.isLink ?<PanelBody title="Link Settings">
                {/* Current Link */}
                <span className='color-primary tx-icon far fa-link display-block mb-10'>{attributes.url}</span>
                {/* Link Controls */}
                <LinkControlSearchInput
					placeholder="URL or Page Name"
					onChange={set_url}
					value={ attributes.url }
					allowDirectEntry={false}
					withURLSuggestion={false}
					withCreateSuggestion={false}
					renderSuggestions={(props) => suggestionsRender(props)}
				/>
                {/*=== isLink ===*/}
                <div className='mt-10'><ToggleControl label="Open in New Tab ?" checked={attributes.inNewTab} onChange={set_inNewTab}/></div>
            </PanelBody> : null}
            {/*===> Widget Panel <===*/}
            <PanelBody title="Typography" initialOpen={false}>
                {/* Text Color */}
                <PhenixColor onChange={set_color} value={attributes.color} />
            </PanelBody>
            {/*===> Widget Panel <===*/}
            <PanelBody title="Background" initialOpen={false}>
                <PhenixBackground onChange={set_background} type={attributes.bg_type} value={attributes.background} />
            </PanelBody>
            {/*===> Widget Panel <===*/}
            <PanelBody title="Custom Data" initialOpen={false}>
                {/* Data ID */}
                <TextControl label="Data-ID" value={ attributes.data_id } onChange={set_data_id} />
                {/* Data Modal */}
                <TextControl label="Data-Modal" value={ attributes.data_modal } onChange={set_data_modal} />
            </PanelBody>
            {/*===> End Widgets Panels <===*/}
        </InspectorControls>

        {/* //====> Edit Layout <====// */}
        {attributes.preview ?
            <img src="https://raw.githubusercontent.com/EngCode/phenix-blocks/main/assets/img/prev/buttons.jpg" alt="" className="fluid" />
            :
            <>
            {attributes.isLink ? 
                <a onClick={(event) => event.preventDefault()} { ...blockProps }>{attributes.type !== 'square' ? labelControl : ''}</a>
                :
                <button { ...blockProps }>{attributes.type !== 'square' ? labelControl : ''}</button>
            }
            </>
        }
    </>);
}