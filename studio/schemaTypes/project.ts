export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "date",
      type: "datetime",
    },
    {
      name: "place",
      type: "string",
    },
    {
      name: "description",
      type: "text"
    },
    {
      name: "projectType",
      title: "Project type",
      type: "string",
      options: {
        list: [
          { title: "Personal", value: "personal" },
          { title: "Client", value: "client" },
          { title: "School", value: "school" },
        ]
      }
    },
    {
      name: "link",
      type: "url",
    },
    {
      name: "tags",
      type: "array",
      of: [
        {
          type: "string",
        }
      ],
      options: {
        layout: "tags",
      }
    }
  ]
}