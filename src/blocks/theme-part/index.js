/*
 * ===> 01 - Block Data
 * ===> 02 - WordPress Modules
 * ===> 03 - Register Block
 * ===> 03 - Block Save Mode [Output]
*/

//===> Block Data <===//
import Edit from './edit';
import metadata from './block.json';

//===> WordPress Modules <===//
import { registerBlockType } from '@wordpress/blocks';

//===> Register Block <===//
registerBlockType(metadata.name, {
    title      : metadata.title,
    category   : metadata.category,
    attributes : metadata.attributes,
    icon  : <svg viewBox="0 0 512 512"><path d="M473.6 512H38.4C17.2 512 0 494.8 0 473.6V38.4C0 17.2 17.2 0 38.4 0h435.2C494.8 0 512 17.2 512 38.4v435.2c0 21.2-17.2 38.4-38.4 38.4zM38.4 17.1c-11.8 0-21.3 9.6-21.3 21.3v435.2c0 11.8 9.6 21.3 21.3 21.3h435.2c11.8 0 21.3-9.6 21.3-21.3V38.4c0-11.8-9.6-21.3-21.3-21.3H38.4z"/><path d="M187.7 51.2h17.1v17.1h-17.1zm-136.5 0h17.1v17.1H51.2zm68.3 0h17.1v17.1h-17.1z"/><path d="M473.6 0H38.4C17.2 0 0 17.2 0 38.4v72.5c0 4.7 3.8 8.5 8.5 8.5h494.9c4.7 0 8.5-3.8 8.5-8.5V38.4C512 17.2 494.8 0 473.6 0zM221.9 42.7v34.1c0 4.7-3.8 8.5-8.5 8.5h-34.1c-4.7 0-8.5-3.8-8.5-8.5V42.7c0-4.7 3.8-8.5 8.5-8.5h34.1c4.6-.1 8.5 3.7 8.5 8.5zm-68.3 0v34.1c0 4.7-3.8 8.5-8.5 8.5H111c-4.7 0-8.5-3.8-8.5-8.5V42.7c0-4.7 3.8-8.5 8.5-8.5h34.1c4.7-.1 8.5 3.7 8.5 8.5zm-76.8-8.6c4.7 0 8.5 3.8 8.5 8.5v34.1c0 4.7-3.8 8.5-8.5 8.5H42.7c-4.7 0-8.5-3.8-8.5-8.5v-34c0-4.7 3.8-8.5 8.5-8.5h34.1zM64 281.6h-4.3v-4.3c0-4.7-3.8-8.5-8.5-8.5s-8.5 3.8-8.5 8.5v12.8c0 4.7 3.8 8.5 8.5 8.5H64c4.7 0 8.5-3.8 8.5-8.5s-3.8-8.5-8.5-8.5zm-12.8-36.1c4.7 0 8.5-3.8 8.5-8.5v-30.3c0-4.7-3.8-8.5-8.5-8.5s-8.5 3.8-8.5 8.5V237c0 4.7 3.8 8.5 8.5 8.5zM64 145.1H51.2c-4.7 0-8.5 3.8-8.5 8.5v12.8c0 4.7 3.8 8.5 8.5 8.5s8.5-3.8 8.5-8.5v-4.3H64c4.7 0 8.5-3.8 8.5-8.5s-3.8-8.5-8.5-8.5zm233.7 0h-25c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5h25c4.7 0 8.5-3.8 8.5-8.5.1-4.7-3.8-8.5-8.5-8.5zm-83.4 17h25c4.7 0 8.5-3.8 8.5-8.5s-3.8-8.5-8.5-8.5h-25c-4.7 0-8.5 3.8-8.5 8.5-.1 4.7 3.7 8.5 8.5 8.5zm200.3-17h-25c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5h25c4.7 0 8.5-3.8 8.5-8.5s-3.8-8.5-8.5-8.5zm-233.7 0h-25c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5h25c4.7 0 8.5-3.8 8.5-8.5s-3.8-8.5-8.5-8.5zm-58.5 0h-25c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5h25c4.7 0 8.5-3.8 8.5-8.5.1-4.7-3.8-8.5-8.5-8.5zm233.8 0h-25c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5h25c4.7 0 8.5-3.8 8.5-8.5s-3.8-8.5-8.5-8.5zm104.6 0H448c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5h4.3v4.3c0 4.7 3.8 8.5 8.5 8.5s8.5-3.8 8.5-8.5v-12.8c0-4.7-3.8-8.5-8.5-8.5zm0 53.1c-4.7 0-8.5 3.8-8.5 8.5V237c0 4.7 3.8 8.5 8.5 8.5s8.5-3.8 8.5-8.5v-30.3c0-4.7-3.8-8.5-8.5-8.5zm0 70.6c-4.7 0-8.5 3.8-8.5 8.5v4.3H448c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5h12.8c4.7 0 8.5-3.8 8.5-8.5v-12.8c0-4.7-3.8-8.5-8.5-8.5zm-338.4 12.8h-25c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5h25c4.7 0 8.5-3.8 8.5-8.5s-3.8-8.5-8.5-8.5zm233.8 0h-25c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5h25c4.7 0 8.5-3.8 8.5-8.5s-3.8-8.5-8.5-8.5zm-175.3 0h-25c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5h25c4.7 0 8.5-3.8 8.5-8.5s-3.8-8.5-8.5-8.5zm233.7 0h-25c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5h25c4.7 0 8.5-3.8 8.5-8.5s-3.8-8.5-8.5-8.5zm-116.9 0h-25c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5h25c4.7 0 8.5-3.8 8.5-8.5s-3.8-8.5-8.5-8.5zm-58.4 0h-25c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5h25c4.7 0 8.5-3.8 8.5-8.5s-3.8-8.5-8.5-8.5zm25.2-51.2h17.1c4.7 0 8.5-3.8 8.5-8.5s-3.8-8.5-8.5-8.5h-17.1v-17.1c0-4.7-3.8-8.5-8.5-8.5s-8.5 3.8-8.5 8.5v17.1h-17.1c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5h17.1v17.1c0 4.7 3.8 8.5 8.5 8.5s8.5-3.8 8.5-8.5v-17.1zm196.3 93.9H51.2c-4.7 0-8.5 3.8-8.5 8.5v128c0 4.7 3.8 8.5 8.5 8.5h409.6c4.7 0 8.5-3.8 8.5-8.5v-128c0-4.7-3.8-8.5-8.5-8.5z"/></svg>,
    /**===> @see ./edit.js <===*/
    edit  : Edit,
    save  : () => null
});