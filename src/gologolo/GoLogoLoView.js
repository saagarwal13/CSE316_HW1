import {GoLogoLoGUIClass, GoLogoLoGUIId, GoLogoLoText} from './GoLogoLoConstants.js'
import {AppsterHTML, AppsterSymbols,AppsterGUIId,AppsterGUIClass} from '../appster/AppsterConstants.js'
import AppsterView from '../appster/AppsterView.js'



export default class GoLogoLoView extends AppsterView {
    constructor() {
        super();
        //this.model
    }

    fillAppWorkspace(workspace) {
        let colorPickerAttributes = [];
        colorPickerAttributes[AppsterHTML.TYPE] = AppsterHTML.COLOR;
        let rangeAttributes = [];
        rangeAttributes[AppsterHTML.TYPE] = AppsterHTML.RANGE;

        // FIRST MAKE THE TOOLBAR
        let toolbar = this.buildElement(AppsterHTML.DIV, GoLogoLoGUIId.GOLOGOLO_TOOLBAR);
        let editTextButton = this.buildElement(AppsterHTML.BUTTON, GoLogoLoGUIId.GOLOGOLO_EDIT_TEXT_BUTTON, [], [], GoLogoLoText.GOLOGOLO_EDIT_TEXT_TEXT);
        editTextButton.innerHTML = AppsterSymbols.EDIT;
        let fontSizeSlider = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER, [], rangeAttributes);

        
        let textColorPicker = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_TEXT_COLOR_PICKER, [], colorPickerAttributes);
        let backgroundColorPicker = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_BACKGROUND_COLOR_PICKER, [], colorPickerAttributes);
        let borderColorPicker = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_BORDER_COLOR_PICKER, [], colorPickerAttributes);
        let borderRadiusSlider = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_BORDER_RADIUS_SLIDER, [], rangeAttributes);
        let borderThicknessSlider = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_BORDER_THICKNESS_SLIDER, [], rangeAttributes);
        let paddingSlider = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_PADDING_SLIDER, [], rangeAttributes);
        let marginSlider = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_MARGIN_SLIDER, [], rangeAttributes);
        let textDiv = this.buildElement(AppsterHTML.DIV, GoLogoLoGUIId.GOLOGOLO_TEXT);
        let promptClass = [GoLogoLoGUIClass.GOLOGOLO_CONTROL_PROMPT];
        toolbar.appendChild(editTextButton);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_FONT_SIZE_TEXT));
        toolbar.appendChild(fontSizeSlider);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_TEXT_COLOR_TEXT));
        toolbar.appendChild(textColorPicker);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_BACKGROUND_COLOR_TEXT));
        toolbar.appendChild(backgroundColorPicker);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_BORDER_COLOR_TEXT));
        toolbar.appendChild(borderColorPicker);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_BORDER_RADIUS_TEXT));
        toolbar.appendChild(borderRadiusSlider);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_BORDER_THICKNESS_TEXT));
        toolbar.appendChild(borderThicknessSlider);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_PADDING_TEXT));
        toolbar.appendChild(paddingSlider);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_MARGIN_TEXT));
        toolbar.appendChild(marginSlider);

        workspace.appendChild(toolbar);
        workspace.appendChild(textDiv);
        return workspace;
    }
    

    loadWork(work) {
        let textDiv = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
        textDiv.innerHTML = work.getText();

        console.log(work);

        textDiv.style.fontSize = work.getFontSize()+ "px" //added now
        

        let fontSizeSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER);
        fontSizeSlider.value = work.getFontSize();
        let textColorPicker = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT_COLOR_PICKER);
        textColorPicker.value = work.getTextColor();
        let backgroundColorPicker = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BACKGROUND_COLOR_PICKER);
        backgroundColorPicker.value = work.getBackgroundColor();
        let borderColorPicker = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_COLOR_PICKER);
        borderColorPicker.value = work.getBorderColor();

        textDiv.style.borderRadius = work.getBorderRadius()+ "px" //added now

        let borderRadiusSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_RADIUS_SLIDER);
        borderRadiusSlider.value = work.getBorderRadius();

        textDiv.style.borderWidth = work.getBorderThickness() +"px";

        let borderThicknessSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_THICKNESS_SLIDER);
        borderThicknessSlider.value = work.getBorderThickness();

        textDiv.style.padding = work.getPadding() +"px";

        let paddingSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_PADDING_SLIDER);
        paddingSlider.value = work.getPadding();

        textDiv.style.margin = work.getMargin() +"px";

        let marginSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_MARGIN_SLIDER);
        marginSlider.value = work.getMargin();
        this.loadWorkStyle(work);
    }

    loadWorkStyle(work) {
        let textDiv = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
        textDiv.style.fontSize = work.getFontSize();
        textDiv.style.color = work.getTextColor();
        textDiv.style.backgroundColor = work.getBackgroundColor();
        textDiv.style.borderColor = work.getBorderColor();
        textDiv.style.borderRadius = work.getBorderRadius();
        textDiv.style.borderThickness = work.getBorderThickness();
    }

    addListItem(initText) {
        let textList = document.getElementById(RTA_GUIId.RTA_TEXT_LIST);
        let listItemCount = textList.childNodes.length;
        let newListItem = this.buildElement(AppsterHTML.LI, RTA_GUIId.RTA_TEXT_LIST_ITEM 
            + listItemCount);
        newListItem.innerHTML = initText;
        textList.appendChild(newListItem);
    }

    appendLetter(listItemId, letterToAppend) {
        let textList = document.getElementById(listItemId);
        textList.innerHTML += textList.innerHTML + letterToAppend;
    }

    showNamePopup() {
        let dialog = document.getElementById(AppsterGUIId.APPSTER_TEXT_INPUT_MODAL);
        dialog.classList.add(AppsterGUIClass.IS_VISIBLE);
        console.log("fgh");
    }
    
    
       hideNamePopup() {
        let dialog = document.getElementById(AppsterGUIId.APPSTER_TEXT_INPUT_MODAL);
        dialog.classList.remove(AppsterGUIClass.IS_VISIBLE);
        document.getElementById(AppsterGUIId.APPSTER_TEXT_INPUT_MODAL_TEXTFIELD).value = ''
    }

    hideNamePopup2() {
        let dialog = document.getElementById(AppsterGUIId.APPSTER_TEXT_INPUT_MODAL1);
        dialog.classList.remove(AppsterGUIClass.IS_VISIBLE);
        document.getElementById(AppsterGUIId.APPSTER_TEXT_INPUT_MODAL_TEXTFIELD1).value = ''
    }

    changefontsize=()=>
    {
        

        let logo = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
        var fontslider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER);
        document.getElementById(GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER).min = "5";
        logo.style.fontSize = fontslider.value + "px"

        console.log(fontslider.value,logo.style.fontSize);
        
        this.controller.model.currentWork.setFontSize(parseInt(fontslider.value));
       
    }

    
    changecolor=()=>
    {
        var logo = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
        var colorslider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT_COLOR_PICKER);

        logo.style.color= colorslider.value;

        this.controller.model.currentWork.setTextColor(colorslider.value);


    }

    changebackcolor=()=>
    {
        var logo = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
        var backcolorslider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BACKGROUND_COLOR_PICKER );

        logo.style.backgroundColor= backcolorslider.value;

        this.controller.model.currentWork.setBackgroundColor(backcolorslider.value);



    }
    changebordercolor=()=>
    {
        var logo= document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
        var bordercolorslider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_COLOR_PICKER );
        logo.style.borderStyle = "solid";

        logo.style.borderColor= bordercolorslider.value;

        this.controller.model.currentWork.setBorderColor(bordercolorslider.value);

    }

    changeborderradius=()=>
    {
        var logo = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
        var borderradiuslider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_RADIUS_SLIDER);
        logo.style.borderStyle = "solid";


        logo.style.borderRadius= borderradiuslider.value+ "px";

        this.controller.model.currentWork.setBorderRadius(parseInt(borderradiuslider.value));
    }

    changeborderthickness=()=>
    {
        var logo = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
        var borderthicknesslider = document.getElementById("gologolo_border_thickness_slider" );
        logo.style.borderStyle = "solid";

        logo.style.borderWidth= borderthicknesslider.value+ "px";

        this.controller.model.currentWork.setBorderThickness(parseInt(borderthicknesslider.value));



    }
    changepadding=()=>
    {
        var logo = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
        var paddingslider = document.getElementById("gologolo_padding_slider" );
        console.log("padding")
        

        logo.style.padding= paddingslider.value+"px";

        this.controller.model.currentWork.setPadding(parseInt(paddingslider.value));

    }
    changemargin=()=>
    {
        var logo = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
        var marginslider = document.getElementById("gologolo_margin_slider" );
       

        logo.style.margin= marginslider.value+"px";

        this.controller.model.currentWork.setBorderThickness(parseInt(marginslider.value));

    }

    

    

  
  
    
}