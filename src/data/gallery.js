/* Gallery albums — grouped real school photos from /public/images/.
   Each group maps to a folder so new photos only need to be added here. */

const campusPhotos = [
  { src: '/images/campus/Campus_fv.jpg', label: 'Campus front view' },
  { src: '/images/campus/Hero_cover.jpg', label: 'Our campus' },
  { src: '/images/campus/IMG_0631.jpg', label: 'Campus walkway' },
  { src: '/images/campus/IMG_0632.jpg', label: 'Green campus' },
  { src: '/images/campus/IMG_0633.jpg', label: 'Outdoor spaces' },
  { src: '/images/campus/IMG_0634.jpg', label: 'Campus gardens' },
  { src: '/images/campus/IMG_0639.jpg', label: 'Our school grounds' },
  { src: '/images/campus/IMG_0640.jpg', label: 'Campus greenery' },
  { src: '/images/campus/IMG_0641.jpg', label: 'Around our campus' },
  { src: '/images/campus/IMG_0642.jpg', label: 'Green campus & gardens' },
  { src: '/images/campus/IMG_0736.jpg', label: 'Campus corner' },
  { src: '/images/campus/IMG_0737.jpg', label: 'Sunny campus' },
  { src: '/images/campus/IMG_0738.jpg', label: 'Campus life' },
  { src: '/images/campus/IMG_0739.jpg', label: 'Open spaces' },
]

const classroomPhotos = [
  { src: '/images/classrooms/IMG_0627.jpg', label: 'Our colourful classroom' },
  { src: '/images/classrooms/IMG_0628.jpg', label: 'Learning corner' },
  { src: '/images/classrooms/IMG_0643.jpg', label: 'Classroom displays' },
  { src: '/images/classrooms/IMG_0646.jpg', label: 'Activity wall' },
  { src: '/images/classrooms/IMG_0654.jpg', label: 'Reading nook' },
  { src: '/images/classrooms/IMG_0658.jpg', label: 'Morning circle time' },
  { src: '/images/classrooms/IMG_0660.jpg', label: 'Learning stations' },
  { src: '/images/classrooms/IMG_0663.jpg', label: 'Our classroom' },
  { src: '/images/classrooms/IMG_0675.jpg', label: 'Our colourful classrooms' },
  { src: '/images/classrooms/IMG_0683.jpg', label: 'Classroom artwork' },
  { src: '/images/classrooms/IMG_0703.jpg', label: 'Little learners at work' },
]

const activityPhotos = [
  { src: '/images/activities/IMG_0674.jpg', label: 'Activity time' },
  { src: '/images/activities/IMG_0677.jpg', label: 'Art & craft wonders' },
  { src: '/images/activities/IMG_0729.jpg', label: 'Story time magic' },
  { src: '/images/play-area/IMG_0634.jpg', label: 'Outdoor play' },
  { src: '/images/play-area/IMG_0724.jpg', label: 'Play area fun' },
  { src: '/images/play-area/IMG_0725.jpg', label: 'Outdoor play adventures' },
  { src: '/images/play-area/IMG_0727.jpg', label: 'Playtime smiles' },
]

/* Events folder is still being filled — the album shows a friendly
   "coming soon" card until photos are added to /public/images/events/. */
const eventPhotos = []

export const galleryGroups = [
  {
    id: 'campus',
    title: 'Campus',
    emoji: '🌳',
    color: '#55D6BE',
    blurb: 'Green spaces, bright corridors and the happy heart of our school.',
    photos: campusPhotos,
  },
  {
    id: 'classrooms',
    title: 'Classrooms',
    emoji: '📚',
    color: '#7692FF',
    blurb: 'Warm, colourful rooms where curiosity, stories and little discoveries live.',
    photos: classroomPhotos,
  },
  {
    id: 'activities',
    title: 'Activities',
    emoji: '🎨',
    color: '#FF5A5F',
    blurb: 'Art, music, stories, games and outdoor play — learning at its most joyful.',
    photos: activityPhotos,
  },
  {
    id: 'events',
    title: 'Events',
    emoji: '🎭',
    color: '#B197FC',
    blurb: 'Festivals, annual day and sports day celebrations with our families.',
    photos: eventPhotos,
    emptyText:
      'We are still gathering memories from our celebrations. Photos from our events will appear here very soon.',
  },
]

/* Flat list of every photo, handy for search/preview use cases. */
export const gallery = galleryGroups.flatMap((group) =>
  group.photos.map((photo) => ({ ...photo, category: group.title, emoji: group.emoji, color: group.color })),
)
