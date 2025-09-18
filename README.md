# Airtable assessment
This repository is a take-home assessment for a Frontend Developer role at Airtable.

## How to build the project:
- `npm install`
- `npm start`

### Requested details
As requested in `instructions.md`:
- What you like about your implementation.
  - I believe the code is well split between simple components and I liked how it turned out visually.
- What you would change if you were going to do it again.
  - I would probably transform a few variables into proper "useState" values. I also think that calculating the position and size of the timeline items in every instance of the `TimelineItem` component wasn't the best way to handle it. I believing that lifting this logic to the parent component can lead to better performance.
- How you made your design decisions. For example, if you looked at other timelines for inspiration, please note that.
  - I took inspiration in the various project management tools I have worked with throughout my professional experience, like Asana, ClickUp, etc.
- How you would test this if you had more time.
  - If I had the time to complete all of the tasks required in the instructions, I would probably use Cypress to test end-to-end use cases (for example: adding items to the timeline, changing start and/or and by dragging and dropping, editing the name of the items)


  
