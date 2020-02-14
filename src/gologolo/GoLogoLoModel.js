import AppsterModel from '../appster/AppsterModel.js'
import GoLogoLoLogo from './GoLogoLoLogo.js'
import {AppsterHTML, AppsterSymbols,AppsterGUIId,AppsterGUIClass} from '../appster/AppsterConstants.js'


export default class GoLogoLoModel extends AppsterModel {
    constructor() {
        super();
        this.currentWork = null;
    }

    createNewWork(workName) {
        let newRandomText = new GoLogoLoText(workName);
        return newRandomText;
    }

    loadWorkData(workToLoad) {
        console.log("load " + workToLoad.getName());
    }

    makeColor(colorData) {
        return "rgb(" + colorData.red + ", " + colorData.green + ", " + colorData.blue + ")";
    }

    goList=()=>
    {
        //console.log("Hi");
        console.log(this.view.buildAppsterTextInputModal());
        console.log(this)
        this.view.controller.registerGoLogoLoEventHandler();
        this.view.showNamePopup();
    }

    checkvalidinput = () =>
    {
        let inptext = document.getElementById(AppsterGUIId.APPSTER_TEXT_INPUT_MODAL_TEXTFIELD).value;
        console.log(inptext);
        console.log(this.getlist)
        console.log(this)
        console.log(this.recentWork.filter(work => work.name === inptext).length > 0)
    
        if(inptext.length<1 || this.recentWork.filter(work => work.name === inptext).length > 0 )
        {
            console.log(this.view.buildAppsterConfirmModal());
            let dialog = document.getElementById(AppsterGUIId.APPSTER_CONFIRM_MODAL);
            dialog.classList.add(AppsterGUIClass.IS_VISIBLE);

        }
        else{

            var worktoadd = new GoLogoLoLogo(inptext);
            this.prependWork(worktoadd);



        }
        this.view.hideNamePopup();
        
    }

    hideConfirmPopup()
    {
        
        let dialog = document.getElementById(AppsterGUIId.APPSTER_CONFIRM_MODAL);
        dialog.classList.remove(AppsterGUIClass.IS_VISIBLE);
        
    }
    hideTrashPopup =(e) =>

    {
        e.stopImmediatePropagation();
        console.log("hello1")
        this.view.hideDialog()
    }
    






    buildAppWork(workArray, name) {
        let appWork = new GoLogoLoLogo();

        // FIND THE WORK DATA FROM THE JSON OBJECT
        for (let i = 0; i < workArray.length; i++) {
            let jsonWork = workArray[i];
            if (jsonWork.name === name) {
                // WE'VE FOUND IT, NOW LOAD ALL OF ITS DATA
                appWork.setName(name);
                appWork.setText(jsonWork.text);
                appWork.setFontSize(jsonWork.font_size);
                appWork.setTextColor(jsonWork.text_color);
                appWork.setBackgroundColor(jsonWork.background_color);
                appWork.setBorderColor(jsonWork.border_color);
                appWork.setBorderRadius(jsonWork.border_radius);
                appWork.setBorderThickness(jsonWork.border_thickness);
                appWork.setPadding(jsonWork.padding);
                appWork.setMargin(jsonWork.margin);
                
            }
            
        }
        
         this.view.controller.registerGoLogoLoEventHandler(); //added this right nowwwwww

        return appWork;
    }

    updateText() {
 //       this.view.
    }
}