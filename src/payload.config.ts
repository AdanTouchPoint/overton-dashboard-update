import { buildConfig } from 'payload/config';
import path from 'path';
import { mongooseAdapter } from '@payloadcms/db-mongodb' // database-adapter-import
import { slateEditor } from '@payloadcms/richtext-slate'
import { webpackBundler } from '@payloadcms/bundler-webpack'
// import Examples from './collections/Examples';
import MainPages from './collections/MainPages';
import Users from './collections/Users';
import Pages from './collections/Pages';
import PoliticallDirect from './collections/PoliticallDirect';
import PoliticallDirectAI from './collections/PoliticallDirectAI';
import AlertThePress from './collections/AlertThePress';
import AlertThePressAI from './collections/AlertThePressAI';
import SubmissionBuilder from './collections/SubmissionBuilder';
import SubmissionBuilderAI from './collections/SubmissionBuilderAI';
import Representatives from './collections/Representatives';
import Electorates from './collections/Electorates';
import Leads from './collections/Leads';
import AfterNavLinks from './customComponents/afterNavLink';
import Campaing from './customComponents/Custome/Campaign';
import EditCampaing from './customComponents/Custome/EditCampaign'
import CustomeReps from './collections/CustomeReps';
import RepresentativesRecord from './collections/RepresentativesRecord';
export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:8080',
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
    components: {
    views: {
      Campaing: {
        Component: Campaing,
        path: '/newcampaing'
      },
      editCampaing: {
        Component: EditCampaing,
        path: '/editcampaing'
      }
    },
      afterNavLinks: [AfterNavLinks]
    }
  },
  collections: [
    Users,
    Pages,
    MainPages,
    PoliticallDirect,
    PoliticallDirectAI,
    AlertThePress,
    AlertThePressAI,
    SubmissionBuilder,
    SubmissionBuilderAI,
    Representatives,
    Electorates,
    Leads,
    CustomeReps,
    RepresentativesRecord
    // Add Collections here
    // Examples,
  ],
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.MONGODB_URI,
  }),
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
