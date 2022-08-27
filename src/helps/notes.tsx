import "astro/jsx-runtime";

export function notesAndTags(allNotes) {
  const notes = sortedNotes(allNotes);
  const tags = noteTags(notes);
  return { allNotes: notes, allTags: tags };
}

function sortedNotes(allNotes) {
  allNotes = allNotes.sort((a, b) => {
    return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date);
  });
  return allNotes;
}

function noteTags(notes) {
  return notes.reduce((allTags, note) => {
    const Tags = note.frontmatter.tags;
    if (Tags) {
      Tags.forEach((tag) => {
        if (!allTags[tag]) {
          allTags[tag] = [];
        }
        allTags[tag].push(note);
      });
    }
    return allTags;
  }, {});
}
