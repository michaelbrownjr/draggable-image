# draggableImage.js

This JavaScript library allows you to make images draggable on a web page. It is specifically designed to be easily integrated into a Drupal site.

## Features

*   Simple drag-and-drop functionality for images.
*   Lightweight and easy to use.

## Usage

### Language and Dependencies

This library is written in jQuery.

### CSS Classes

The following CSS classes are used for styling and functionality:

*   `.draggable-image`: Applied to the image element to make it draggable.
*   `.image-container`: (Optional) A container element to limit the dragging area.

### Integration with Drupal

1.  **Place `draggableImage.js` in your Drupal theme's libraries folder.** For example, `/themes/your_theme/libraries/draggableImage`.

2.  **Declare the library in your theme's `libraries.yml` file:**

    ```yaml
    draggable-image:
      version: 1.0
      js:
        js/draggableImage.js: {}
      css:
        theme:
          css/draggableImage.css: {}  # If you have a separate CSS file
    ```

3.  **Attach the library to your Drupal pages or blocks where you want to use it.**  You can do this in a few ways:

    *   **Using a preprocess function:** In your theme's `mytheme.theme` file, add a preprocess function to attach the library. For example, to attach it to all pages:

        ```php
        function mytheme_preprocess_page(&$variables) {
          $variables['#attached']['library'][] = 'draggable-image';
        }
        ```

    *   **Directly in a Twig template:** If you only need the library on a specific page or template, you can attach it directly in the Twig file:

        ```twig
        {{ attach_library('draggable-image') }}
        ```

4.  **Add the `draggable-image` class to the image you want to make draggable.** You can do this in your Drupal content or in a custom Twig template.

    ```html
    <img src="your-image.jpg" class="draggable-image" alt="Draggable Image">
    ```
