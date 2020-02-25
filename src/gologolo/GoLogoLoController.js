import AppsterController from '../appster/AppsterController.js'
import {GoLogoLoGUIClass, GoLogoLoGUIId, GoLogoLoText} from './GoLogoLoConstants.js'
import {AppsterHTML, AppsterSymbols,AppsterGUIId,AppsterGUIClass} from '../appster/AppsterConstants.js'

export default class GoLogoLoController
 extends AppsterController {
    constructor() {
        super();
    }

    processEditText() {
        this.model.updateText();
    }


registerGoLogoLoEventHandler()
{

    console.log("Checking controller");
    console.log(this)
    
    this.registerEventHandler(AppsterGUIId.APPSTER_TEXT_INPUT_MODAL_CANCEL_BUTTON,AppsterHTML.CLICK, this.model.view.hideNamePopup);

    this.registerEventHandler(AppsterGUIId.APPSTER_TEXT_INPUT_MODAL_ENTER_BUTTON,AppsterHTML.CLICK, this.model.checkvalidinput);
    this.registerEventHandler(AppsterGUIId.APPSTER_CONFIRM_MODAL_OK_BUTTON,AppsterHTML.CLICK,this.model.hideConfirmPopup);
    this.registerEventHandler(AppsterGUIId.APPSTER_YES_NO_MODAL_YES_BUTTON,AppsterHTML.CLICK, this.model.Trashwork);
    this.registerEventHandler(AppsterGUIId.APPSTER_YES_NO_MODAL_NO_BUTTON,AppsterHTML.CLICK,this.model.hideTrashPopup); 
    
    this.registerEventHandler(AppsterGUIId.APPSTER_TEXT_INPUT_MODAL_CANCEL_BUTTON1,AppsterHTML.CLICK, this.model.hideNamePopup2);
    this.registerEventHandler(AppsterGUIId.APPSTER_TEXT_INPUT_MODAL_ENTER_BUTTON1,AppsterHTML.CLICK, this.model.changeLogoName);

     console.log(GoLogoLoGUIId.GOLOGOLO_EDIT_TEXT_BUTTON);
     console.log(this.model.view.showNamePopup);
     console.log(this.model.view.hideNamePopup);
     this.registerEventHandler(AppsterGUIId.APPSTER_CONFIRM_MODAL_OK_BUTTON1,AppsterHTML.CLICK,this.model.hideConfirmPopup1);

    this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_EDIT_TEXT_BUTTON,AppsterHTML.CLICK,this.model.showNamePopup2);

    this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER,AppsterHTML.INPUT,this.model.view.changefontsize);
    this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_TEXT_COLOR_PICKER,AppsterHTML.INPUT,this.model.view.changecolor);
    this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_BACKGROUND_COLOR_PICKER,AppsterHTML.INPUT,this.model.view.changebackcolor);
    this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_BORDER_COLOR_PICKER,AppsterHTML.INPUT,this.model.view.changebordercolor);
    this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_BORDER_RADIUS_SLIDER,AppsterHTML.INPUT,this.model.view.changeborderradius);
    this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_BORDER_THICKNESS_SLIDER,AppsterHTML.INPUT,this.model.view.changeborderthickness);
    this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_PADDING_SLIDER,AppsterHTML.INPUT,this.model.view.changepadding);
    this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_MARGIN_SLIDER,AppsterHTML.INPUT,this.model.view.changemargin);


    
    
   

        
   
        

    
}
 }