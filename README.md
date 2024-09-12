# blog-post-project
it's simple repsonsive desgin for blog which include also a desgin for blog post, the project cotnains two page, also I'm using css3 such as grid and flexbox to make it full responsive on large, mid and small screens.

# languages:
*. HTML5
*. CSS3
*. JavaScript

# Notes:
1. project using small based class like bootstrap also names of classes used almost identical to bootstrap4 while if you are included bootstrap into your project no single calls will confliect with bs4 classes as i'm using "_" instead of "-" and for short 1 word classes such as btn i added extra constient word which is "set" at the begning for all similr

# advanced part:
there are use of advanced masking with css which in my opinion considered the most suitable and well supported by all browser masking for modal, I tried to smuilate the bootstrap modal, and using this masking can say it same as bs or even simpler the code and better, also note the full modal is built based on css3 you not need single js line of code incase you decide display it manual (as everything done using just 1 class I also to make it 0 js code and keep it same as bs modal I decided make the masking in the modal first parent and second parent is the content that display the modal so no need js to create element for masking etc, also my masking used prevent any actions can done on the elements in background without any js as it not use filters or opacity it use element full width and height in background with lower z-index than the content and with near to transparent color rgba with 0.72 transparency, note there still js code for modal to be displayed by clicking a button, also this js make sure it allow for multiple modals can created also make sure if multiple modals were exist and 1 opened already and some Pro user could overide the masking and access the button and click on another button that displays another modal the previous modal will be closed before the new open so always 1 modal opened, but you can test the full css masking open and off by just toggling single class  "active_mask" to the div with class "set_modal", also same as bootstrap you need to follow the same setructure to create new modal (modal header content and modal_footer content is optional but there are css in modal with no important used as the project uses 1 modal already you can overide the css using !important or bigger selector, also ID is optional but it used by the javascript and trigger the modal using a button with class "modal_opener" and data-target that includes the target modal ID for example `data-target="#subscribeModal"`.

```html
    <div class="set_modal" id="subscribeModal">
        <div class="modal_content">
            <div class="modal_header">
                <h1 class="mhead_title txt_shadow">
                    <span class="mhead_title_span">Your Title</span>
                </h1>
                <div class="mhead_closer_cont">
                    <button class="mhead_closer btn_danger close_modal"><i class="fa fa-close"></i></button>
                </div>
            </div>
            <div class="modal_body">
            </div>
            <div class="modal_footer d_flex justify_end align_center">
                <button class="close_modal set_btn btn_danger" type="button">Cancel</button>
            </div>
        </div>
    </div>
```

