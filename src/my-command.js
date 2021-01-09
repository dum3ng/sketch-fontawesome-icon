import sketch from 'sketch'
// documentation: https://developer.sketchapp.com/reference/api/

export default function () {
  // sketch.UI.message("It's alive 🙌")
  const doc = sketch.getSelectedDocument()
  const page = doc.selectedPage
  const { Text, Rectangle } = sketch
  const text = new Text()
  text.text = 'hello plugin'
  text.parent = page
  text.frame = new Rectangle(100, 100)
}
