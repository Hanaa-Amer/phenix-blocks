/*
 * ===> 01 - Import Assets
 * ===> 02 - Import Block Functions
 * ===> 03 - Register Block
*/

//===> WordPress Modules <===//
import {MediaUpload} from '@wordpress/block-editor';
import {Component} from '@wordpress/element';

//===> Media Uploader <===//
export default class MediaUploader extends Component {
    render () {
        //===> Properties <===//
        const {
            label,
            value,
            size,
            type,
            setValue,
            className,
        } = this.props;

        //===> Output <===//
        return (<>
            <MediaUpload onSelect={ setValue } value={value} render={({open}) => (
                    <div className="cursor-pointer" onClick={open}>
                        {/* label */}
                        {label ? <label className="mb-10 cursor-pointer">{label}</label> : ''}
                        {/* elements group */}
                        <div className={`flexbox align-center-y align-between cursor-pointer${className ? `${className}` : ""}`}>
                            {size === 'small' ?
                                <>
                                    {!type || type === 'image' ? <img src={value} style={{"maxHeight": "2.25rem"}} /> : null}
                                    <button key="change-media" onClick={open} className="btn square primary small radius-sm fs-12 fas fa-upload"></button>
                                </>
                                :
                                <>
                                    {!type || type === 'image' ? <img src={value} className="radius-sm radius-top" style={{"maxWidth": "100%", "display": "block"}} /> : null}
                                    <button key="change-media" onClick={open} className="btn fluid primary small radius-sm radius-bottom fs-13 far fa-camera btn-icon">Select File</button>
                                </>
                            }
                        </div>
                        {/* //elements group */}
                    </div>
                )}
            />
        </>
        )
    }
}