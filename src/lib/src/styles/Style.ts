import * as CSS from 'csstype';

export default class Style {
    static text(color: string, fontSize: string, fontWeight?: string | any, fontFamily?: string, textAlign?: string | any,
    justifyContent?: string, alignSelf?: string, alignItems?: string, upper?: string, lower?: string, padding?: number | string | any){
        const style: CSS.Properties = {
            color: color,
            fontSize: fontSize,
            fontWeight: fontWeight,
            fontFamily: fontFamily,
            textAlign: textAlign,
            justifyContent: justifyContent,
            alignSelf: alignSelf,
            alignItems: alignItems,
            textTransform: upper !== undefined && lower === undefined ? "uppercase" : lower !== undefined ? "lowercase" : "none",
            padding: padding
        };
        return style;
    }

    static spacePaddingLeft(space: any){
        const style: CSS.Properties = {
            paddingLeft: space
        }
        return style;
    }

    static spacePaddingRight(space: any){
        const style: CSS.Properties = {
            paddingRight: space
        }
        return style;
    }

    static addIconFieldRight(){
        const style: CSS.Properties ={
            marginTop: '-30px',
            paddingRight: '10px',
            position: "relative"
        }
        return style;
    }

    static addIconFieldTop(){
        const style: CSS.Properties ={
            marginTop: '-30px',
            paddingTop: '10px',
            position: "relative"
        }
        return style;
    }

    static addIconFieldBottom(){
        const style: CSS.Properties ={
            marginTop: '0px',
            paddingLeft: '10px',
            position: "relative"
        }
        return style;
    }

    static addIconFieldLeft(){
        const style: CSS.Properties ={
            marginTop: '-30px',
            paddingLeft: '12px',
            position: "relative"
        }
        return style;
    }

}
