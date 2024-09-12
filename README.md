# Blog Post Project

![image](https://github.com/user-attachments/assets/a76051dc-16ed-422b-a4be-9920ef7baaa5)

This project is a simple responsive design for a blog that includes a layout for individual blog posts. It contains two pages, and I utilized CSS3 features such as Grid and Flexbox to ensure full responsiveness on large, medium, and small screens.

# Languages:
* HTML5
* CSS3
* JavaScript

# Notes:
1. The project uses a small set of classes similar to Bootstrap.
2. The names of the classes used are almost identical to Bootstrap 4.
3. If you include Bootstrap in your project, there will be no conflicts since I have used "_" instead of "-" in class names. For short, single-word classes such as "btn," I added an extra consonant, "set," at the beginning for all similar classes such as set_modal.


# Advanced Features:
This project implements advanced masking with CSS, which, in my opinion, is the most suitable and well-supported method for modal dialogs across all browsers. I aimed to simulate the Bootstrap modal. This masking technique allows for implementation that is almost identical to Bootstrap, but simpler and cleaner in code.

Additionally, the full modal is built entirely with CSS, requiring no JavaScript if you choose to display it manually. Everything is accomplished using just one class. To maintain a Bootstrap-like experience, I designed the masking to be the first parent of the modal, with the second parent holding the content to be displayed. Therefore, no JavaScript is needed to create elements for masking.

The masking approach prevents any interactions with background elements without utilizing JavaScript. Instead, it uses full-width and full-height elements in the background, set with a lower z-index than the content and a nearly transparent color (RGBA with 0.72 transparency). Note that JavaScript is still used for displaying the modal by clicking a button. This JavaScript allows multiple modals to be created and ensures that if multiple modals are open and one is already displayed, any attempt to open another modal will close the previous one, thereby maintaining one open modal at a time.

You can test the full CSS masking behavior by toggling the "active_mask" class on the div with the class "set_modal." Like Bootstrap, you need to follow a specific structure to create new modals (modal header, content, and modal footer). The modal footer content is optional, but there is CSS in the modal that can be overridden using `!important` or a more specific selector. The ID is also optional but is used by the JavaScript to trigger the modal with a button that has the class "modal_opener" and a `data-target` attribute including the target modal ID (e.g., `data-target="#subscribeModal"`).


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

![image](https://github.com/user-attachments/assets/267bcc2f-b7b4-4a93-bc54-03d79669b36a)

# why simple desgin:
No external desgin created by professional desginers used for project copyright!

As a full-stack web developer, my primary focus is on application development, logic, problem-solving, database management, and user experience. While I have a strong understanding of HTML5 and CSS3 functionality, such as media queries, my emphasis is not on design tools that require extensive experience, like Figma, photoshop, etc.

I do not prioritize design expertise that is akin to that of fashion professionals who match colors and consider aesthetic details. Instead, I focus on creating applications similar to those developed by major companies like Google, YouTube, and Facebook, which prioritize functionality and user engagement over design intricacies.

My approach involves ensuring responsiveness and adherence to grid layouts, with an emphasis on using well-structured and advanced CSS3 techniques. Design elements are created without relying on professional design tools or external images typically used by designers or frontend-only developers.


# About project
This project is the first project in the Front End Web Developer and Digital Freelancing course at Udacity.com. Nothing was copied from external resources; 

