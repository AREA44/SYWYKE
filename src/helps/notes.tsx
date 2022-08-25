import "astro/jsx-runtime";

export function notesAndTags(allNotes) {
  const notes = sortedPosts(allNotes);
  const tags = postTags(notes);
  return { allNotes: notes, allTags: tags };
}

function sortedPosts(allNotes) {
  allNotes = allNotes.sort((a, b) => {
    return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date);
  });
  return allNotes;
}

function postTags(notes) {
  return notes.reduce((allTags, note) => {
    const noteTags = note.frontmatter.tags;
    if (noteTags) {
      noteTags.forEach((tag) => {
        if (!allTags[tag]) {
          allTags[tag] = [];
        }
        allTags[tag].push(note);
      });
    }
    return allTags;
  }, {});
}
