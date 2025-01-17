import migration20190805T151302 from './migrations/20190805T151302-add-version.js'
import migration20190805T191212 from './migrations/20190805T191212-add-vertical-to-range.js'
import migration20190805T225927 from './migrations/20190805T225927-add-support-for-multiple-axes.js'
import migration20190810T122103 from './migrations/20190810T122103-fix-plotly-offset.js'
import migration20190810T192729 from './migrations/20190810T192729-add-axes-to-dataset.js'

export default [
  { 'version': '2019-08-05T15:13:02+00:00', migration: migration20190805T151302 },
  { 'version': '2019-08-05T19:12:12+00:00', migration: migration20190805T191212 },
  { 'version': '2019-08-05T22:59:27+00:00', migration: migration20190805T225927 },
  { 'version': '2019-08-10T12:21:03+00:00', migration: migration20190810T122103 },
  { 'version': '2019-08-10T19:27:29+00:00', migration: migration20190810T192729 },
]
