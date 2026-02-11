# React Component Templates for AI Section Generation

This directory contains React component templates that correspond to the JSON component definitions in `/backend/src/services/ai_v2/json/supported-elements.json`.

## Purpose

These components are designed to be:
1. **Copied to the sandbox template** (`/backend/sandbox/template/src/components`) when creating preview environments
2. **Used by the AI agent** to generate page sections dynamically
3. **Rendered in the preview** to show users their generated designs

## Component Structure

### Layout Components
- **Container**: Basic wrapper div for grouping elements
- **Row**: Grid row container with column management
- **Col**: Grid column with configurable width (colWidth prop)

### Content Components
- **Title**: Heading component (h1-h6) with size prop
- **Text**: Paragraph/text content with HTML support
- **Image**: Image component with src/externalSrc support
- **Icon**: Material Icons wrapper
- **Button**: Button/link component with destination and action support

### List Components
- **List**: Unordered list container
- **ListItem**: List item with content support

### Advanced Components
- **Repeater**: Template repeater for dynamic data binding

## JSON to Component Mapping

Each JSON component from `supported-elements.json` maps to a React component:

```json
{
  "t": "Container",
  "p": { "children": [] },
  "styles": [],
  "id": ""
}
```

Maps to:

```tsx
<Container style={...} className={...}>
  {children}
</Container>
```

## Props Structure

All components accept:
- `children`: React children elements
- `style`: Inline CSS styles object
- `className`: CSS class names
- Component-specific props (e.g., `size` for Title, `src` for Image)

## TypeScript Lints

**Note**: TypeScript errors in this directory are expected because these files are in a Node.js backend environment without React type definitions. When these components are copied to the sandbox template (which has proper React/TypeScript configuration), all errors will resolve.

## Usage in AI Agent

The AI agent will:
1. Read these component files using the `get_related_components` tool
2. Understand component structure and props
3. Generate sections using these components
4. Write generated code to the sandbox preview

## Adding New Components

To add a new component:

1. Create the component file (e.g., `NewComponent.tsx`)
2. Follow the existing pattern with props destructuring
3. Export the component as default and named export
4. Add export to `index.ts`
5. Update this README

## Component List

### Completed ✅
- Container
- Row
- Col
- Title
- Text
- Image
- Icon
- Button
- List
- ListItem
- Repeater

### To Be Created 📝
- Video
- Input
- Select
- TextArea
- CheckBox
- Label
- Link
- BlockLink
- Carousel
- Accordions
- Tabs
- Stars
- ProductOption
- OrderBump
- Divider
- And more from supported-elements.json...

## Integration with Preview Service

When `previewSandboxService.createPreview()` is called:
1. The sandbox template is seeded from `/backend/sandbox/template`
2. These components should be available in `src/components`
3. AI-generated sections can import and use these components
4. The preview builds and displays the generated design

## Next Steps

1. ✅ Create basic layout and content components
2. ⏳ Create remaining form and interactive components
3. ⏳ Create advanced components (Carousel, Tabs, etc.)
4. ⏳ Create e-commerce specific components
5. ⏳ Set up automatic copying to sandbox template on preview creation
6. ⏳ Update AI agent to use these components for section generation
