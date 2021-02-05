/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-c2eb7e97cafc9194aa90.js"
  },
  {
    "url": "styles.9a99471cd7693b76670d.css"
  },
  {
    "url": "styles-407fe62976dc5310c43e.js"
  },
  {
    "url": "framework-f0fa8831b6d960814d9c.js"
  },
  {
    "url": "dc6a8720040df98778fe970bf6c000a41750d3ae-b94f638f4de4ea0a7425.js"
  },
  {
    "url": "app-c1021e46a52f233822a2.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "d5bbed0202351b92cf9bd34fdecf7eab"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-a95b272f8c25b9a8a758.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f6081b83111aea4128c98944b7fafccc"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "a8678f10b7d906d6e965672265cf20b3"
  },
  {
    "url": "polyfill-c4be7b7af6a8a4bbafef.js"
  },
  {
    "url": "7b1c482a-0ca19268809a797cffe1.js"
  },
  {
    "url": "82cfefe2b63db0a65f63d141268cf0cf0543b2fc-28bc939aa1c8f2a4d771.js"
  },
  {
    "url": "91b92e7055b74fca3e78d955bc0d2d4667ca70c1-39e05fc097cf850f203c.js"
  },
  {
    "url": "1b962e18608a11743be576efae2125b41d25e7ad-1eb0748a0bf59592d175.js"
  },
  {
    "url": "component---src-templates-blog-posts-tsx-a94a293d7128a47454dd.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "3333a16c4a0e733e91ab692463a3e1d9"
  },
  {
    "url": "page-data/sq/d/118757218.json",
    "revision": "30544ee723474dd9d91c22cfa099c8e1"
  },
  {
    "url": "page-data/sq/d/1853074139.json",
    "revision": "154460109337dc2a3517bcd42c16cad1"
  },
  {
    "url": "page-data/sq/d/3000541721.json",
    "revision": "947cd12b0f2dd29a867340d90a99004f"
  },
  {
    "url": "page-data/sq/d/63159454.json",
    "revision": "a4676163f1e68a9ce0554d874e5b94f6"
  },
  {
    "url": "component---src-templates-blog-page-tsx-51ae7456f45db1253280.js"
  },
  {
    "url": "page-data/__trashed/page-data.json",
    "revision": "ab125e8df720bcf516a9f84e11f344dd"
  },
  {
    "url": "page-data/2/page-data.json",
    "revision": "497908a0e003b03b853c5c3686a106cb"
  },
  {
    "url": "page-data/3/page-data.json",
    "revision": "1b1b0139af8d66069111c053b585791c"
  },
  {
    "url": "page-data/4/page-data.json",
    "revision": "931fa6bdb9d4183501c48b4eef9fce98"
  },
  {
    "url": "component---src-pages-404-tsx-56550a9758b6bdc24029.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "c4fd9e1710306e76de3f9852561c8254"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "7ecd6e96ad95dafb3c56ec6c0317a65d"
  },
  {
    "url": "page-data/5/page-data.json",
    "revision": "fea9e17cb758839d42810d8526ef7a20"
  },
  {
    "url": "page-data/6/page-data.json",
    "revision": "82fc6cab62c5728352abe69148c60337"
  },
  {
    "url": "page-data/7/page-data.json",
    "revision": "2f2d1bf1aac6714b37a97e7c40f765cc"
  },
  {
    "url": "component---src-templates-blog-post-tsx-3c4ce4ee6af6a007a47e.js"
  },
  {
    "url": "page-data/aaaaaaaaaa/page-data.json",
    "revision": "2546a037363b12692e34dca725f3539c"
  },
  {
    "url": "page-data/sq/d/1271460761.json",
    "revision": "73ec85769725bae26b83afe9e8f33923"
  },
  {
    "url": "page-data/add-your-personal-taste-to-your-teams-meetings/page-data.json",
    "revision": "0291875a2789420fa615568fc08b481f"
  },
  {
    "url": "page-data/asp-net-core-2-2-authorization/page-data.json",
    "revision": "73a9f289b8b9f2c8718ea5e9adc3cd66"
  },
  {
    "url": "page-data/clear-office-365-storage-size-with-versioning/page-data.json",
    "revision": "05a7f817fe36f556a4ca2809196bd480"
  },
  {
    "url": "page-data/column-formatting-with-a-column-not-present-in-the-view/page-data.json",
    "revision": "8dccb52f411243e2a96259cd3c58a275"
  },
  {
    "url": "page-data/come-visit-us-at-espc19/page-data.json",
    "revision": "9d9045d46d815649317da570ed19442b"
  },
  {
    "url": "page-data/consulting/page-data.json",
    "revision": "fbb9cf52a097f979f7c8867eb8f323c5"
  },
  {
    "url": "page-data/contact-us/page-data.json",
    "revision": "9aece04007867815eae00361af5e7163"
  },
  {
    "url": "page-data/dealing-repetitive-js-promises/page-data.json",
    "revision": "5f913242945529743213ebff0bdd9049"
  },
  {
    "url": "page-data/developing-sharepoint-framework-web-parts-using-visual-studio-2017/page-data.json",
    "revision": "161e29e31a606484483a30fb59bc3c56"
  },
  {
    "url": "page-data/devscope-is-fighting-corona-virus-by-helping-companies-to-enable-remote-work/page-data.json",
    "revision": "196624aad9bbdaaa922a4c068c0612c9"
  },
  {
    "url": "page-data/feedback-analysis-solution-with-no-code-and-office365/page-data.json",
    "revision": "7706845654d71e15048ad68e2f72a918"
  },
  {
    "url": "page-data/get-the-most-out-of-your-content-with-sharepoint-syntex/page-data.json",
    "revision": "c4149fe4b486a9f034f4deed0ff75815"
  },
  {
    "url": "page-data/hello-world/page-data.json",
    "revision": "2ca27d56ad5b8df12b99798b42560d26"
  },
  {
    "url": "page-data/how-to-provision-sharepoint-sites-using-power-automate/page-data.json",
    "revision": "cb48f1d3fe1113398e27f60d3d8d38eb"
  },
  {
    "url": "page-data/ignorance-is-never-better-than-knowledge/page-data.json",
    "revision": "d9690990e717e5cefb4c0c514a6a2c7e"
  },
  {
    "url": "page-data/javascript-api-creating-ribbon-tabs-buttons/page-data.json",
    "revision": "ea60cf6428ac5c36a447b50cd5c31797"
  },
  {
    "url": "page-data/make-sharepoint-columns-read-only/page-data.json",
    "revision": "6d027bd46ed6a008588df4b8a5e0db3e"
  },
  {
    "url": "page-data/make-your-team-site-look-like-a-communication-site/page-data.json",
    "revision": "ecf78bbe0f25cdb674b1908e45fb7505"
  },
  {
    "url": "page-data/microsoft-forms-increase-the-power/page-data.json",
    "revision": "174267e007a4ef22ff568942e103edd3"
  },
  {
    "url": "page-data/microsoft-released-to-do/page-data.json",
    "revision": "a2a9a2733414094ac626dbd40ecfc896"
  },
  {
    "url": "page-data/microsoft-teams-tab-with-single-sign-on/page-data.json",
    "revision": "9d0821de912050591f16d402eeb1fb0e"
  },
  {
    "url": "page-data/new-office365-april-update/page-data.json",
    "revision": "a2d7473ed9326c7a3daea056c069df17"
  },
  {
    "url": "page-data/office365-groups-webpart/page-data.json",
    "revision": "d8dd66eee11c33776ddf4d033213db54"
  },
  {
    "url": "page-data/office365-roadmap/page-data.json",
    "revision": "427d3e953d906eb0f040d011f64aed50"
  },
  {
    "url": "page-data/preview-documents-stored-in-sql-using-office-web-apps/page-data.json",
    "revision": "ebe57af0ffe6ad280a3157037c01819e"
  },
  {
    "url": "page-data/printing-modern-experience-sharepoint-page/page-data.json",
    "revision": "27ca8610d10347e84816f2bd96bea64b"
  },
  {
    "url": "page-data/programmatically-configure-the-page-approval-flow-for-modern-pages-in-sharepoint-online/page-data.json",
    "revision": "6eb57addf30a0335d19de106c90616a3"
  },
  {
    "url": "page-data/sample-page/page-data.json",
    "revision": "41382d9219cad46744583a2118f7e03a"
  },
  {
    "url": "page-data/sharepoint-content-enrichment-webservice/page-data.json",
    "revision": "b5a7d0ff5e9cff7e94ebb6578c6f3dc8"
  },
  {
    "url": "page-data/sharepoint-high-trust-apps-troubleshoot-tips/page-data.json",
    "revision": "1af1f45bc9c31088b39b780460093490"
  },
  {
    "url": "page-data/sharepoint-hybrid-office-365-premises-better-together/page-data.json",
    "revision": "786c386e041231528ba4983d968d712e"
  },
  {
    "url": "page-data/sharepoint-online-multi-language-modern-sites-real-case-pros-and-cons/page-data.json",
    "revision": "462db982d115774f1cf8972c2d44079a"
  },
  {
    "url": "page-data/sharepoint-search-different-way-to-index-sql-external-content/page-data.json",
    "revision": "742769c45ac3de5238ad35b0ddf39504"
  },
  {
    "url": "page-data/sharepoint-virtual-summit-future-is-sharepoint/page-data.json",
    "revision": "2ae1fc32c2203368eb0acf2293117dc2"
  },
  {
    "url": "page-data/sharepoint-webhooks/page-data.json",
    "revision": "164eb306ae4fe0f31115892f0031d413"
  },
  {
    "url": "page-data/sharpeoint-update-lists-of-provider-hosted-apps-without-losing-data/page-data.json",
    "revision": "69d0fd2521a9afe273b372924ca7e49c"
  },
  {
    "url": "page-data/smartexpenses-for-sharepoint/page-data.json",
    "revision": "a5069a4669c19c3501fa50199d508309"
  },
  {
    "url": "page-data/solid-principles/page-data.json",
    "revision": "c450e6454bb8ffc78f2777f5c46449bd"
  },
  {
    "url": "page-data/spfx-dont-always-start-from-scratch/page-data.json",
    "revision": "98edf239946de4d50808ad6c704af80f"
  },
  {
    "url": "page-data/taxonomy-tenant-navigation-menu-sharepoint-online/page-data.json",
    "revision": "8bed5516c91e3b8824a12e365a34884e"
  },
  {
    "url": "page-data/tiles-view-formatting-thumbnail-along-with-description-and-keywords/page-data.json",
    "revision": "ebb9152c7180d0b3f9fc9f0a65369099"
  },
  {
    "url": "page-data/tips-tricks-view-formatting-with-a-column-not-present-in-the-view/page-data.json",
    "revision": "10ac6b90d0a1abff05014c4422a7b454"
  },
  {
    "url": "page-data/tipstricks-feed-rss-increase-the-customization-with-sharepoint-lists-and-power-automate/page-data.json",
    "revision": "a658735d3bb844f9c15f2fd8059e6662"
  },
  {
    "url": "page-data/turn-your-teams-meetings-a-litte-more-fun/page-data.json",
    "revision": "95e81c2911ed81f9f2e445152c3d57e5"
  },
  {
    "url": "page-data/updates-sharepoint-framework/page-data.json",
    "revision": "cb0f5947c1cf988ee91c37630c303cad"
  },
  {
    "url": "page-data/who-we-are/page-data.json",
    "revision": "45755406bc4ccf6eb07bfadabc5ba94f"
  },
  {
    "url": "component---src-templates-blog-tag-posts-tsx-3d8d0e705328327c05a1.js"
  },
  {
    "url": "page-data/tag/add-in/page-data.json",
    "revision": "8ef23a58b555fa0df6652ec7f608afb4"
  },
  {
    "url": "page-data/tag/addin/page-data.json",
    "revision": "5dbe3b38d082672063c4801d180979af"
  },
  {
    "url": "page-data/tag/ai/page-data.json",
    "revision": "fb3890564308ec70426c84ac9fc164eb"
  },
  {
    "url": "page-data/tag/analysis/page-data.json",
    "revision": "3aeb7631de3a87d087d4b109e8b3b297"
  },
  {
    "url": "page-data/tag/app/page-data.json",
    "revision": "0f812b5f760ff8114bf8100dbe474b62"
  },
  {
    "url": "page-data/tag/apps/page-data.json",
    "revision": "b9e9cb0f0ae06750b81a3791e103d9cf"
  },
  {
    "url": "page-data/tag/artificialintelligence/page-data.json",
    "revision": "988514144f3cfc31e2489e70fc62120c"
  },
  {
    "url": "page-data/tag/asp-net-core/page-data.json",
    "revision": "1ea08f1c357314ba88a2f1ab86118c84"
  },
  {
    "url": "page-data/tag/authorization/page-data.json",
    "revision": "3d01635ae7b0716c25d4380a0802ad04"
  },
  {
    "url": "page-data/tag/authorization-policy/page-data.json",
    "revision": "dad85eb8527c2be9b494d5fff7a36f19"
  },
  {
    "url": "page-data/tag/azure-ad/page-data.json",
    "revision": "fac8ee6d2f897fa445fd226da5dd4da5"
  },
  {
    "url": "page-data/tag/c/page-data.json",
    "revision": "1954cd0f2dcea28509afac126428753c"
  },
  {
    "url": "page-data/tag/canvas/page-data.json",
    "revision": "bcbd2e161a256b9c28fe870c57b09c7e"
  },
  {
    "url": "page-data/tag/column-formatting/page-data.json",
    "revision": "a3493f30ee7d507e58d60c667113ffd1"
  },
  {
    "url": "page-data/tag/columns/page-data.json",
    "revision": "a163d94592f63d28d56be8c9231671d7"
  },
  {
    "url": "page-data/tag/communication-site/page-data.json",
    "revision": "6642c8478563545a7029a55b39ef5ccb"
  },
  {
    "url": "page-data/tag/contact/page-data.json",
    "revision": "7bec5898a4c51cc40cda49a0cc7e5d39"
  },
  {
    "url": "page-data/tag/content-moderation/page-data.json",
    "revision": "e36b6b8ebf8667ea4c1a0f2595f6a03d"
  },
  {
    "url": "page-data/tag/coronavirus/page-data.json",
    "revision": "06236e5439b0423bfd917a8a1efc43e5"
  },
  {
    "url": "page-data/tag/crawl/page-data.json",
    "revision": "ae50c6e35dba9aed2234a1534cbb0790"
  },
  {
    "url": "page-data/tag/custom-action/page-data.json",
    "revision": "f31ec9f8da8eceaeff62e48e49d7697b"
  },
  {
    "url": "page-data/tag/data/page-data.json",
    "revision": "2b95d97b2a3e81ea4b5dee9fe7f9317d"
  },
  {
    "url": "page-data/tag/delve/page-data.json",
    "revision": "dd555fed1817dc8f9e8ed6c5cf1b3e77"
  },
  {
    "url": "page-data/tag/devscope/page-data.json",
    "revision": "cc2f8c583b396efdc84994182ec23e42"
  },
  {
    "url": "page-data/tag/dynamics365/page-data.json",
    "revision": "54d0ff7c350edb663eb9b3903f270476"
  },
  {
    "url": "page-data/tag/ecmascript6/page-data.json",
    "revision": "86daa15e41eb1ae78800badc07dc4767"
  },
  {
    "url": "page-data/tag/espc19/page-data.json",
    "revision": "805acf8d43100905530a0f02b14bc1cd"
  },
  {
    "url": "page-data/tag/eventreceiver/page-data.json",
    "revision": "40d6d55255211f74e49620e435a3c292"
  },
  {
    "url": "page-data/tag/filters/page-data.json",
    "revision": "ec29250398ce063348b38b5c24ae2b9f"
  },
  {
    "url": "page-data/tag/flow/page-data.json",
    "revision": "a217327d20f0611ad1c52ff5eb080016"
  },
  {
    "url": "page-data/tag/format-view/page-data.json",
    "revision": "6c56e2f42c49020bb7e31eeee4ad5591"
  },
  {
    "url": "page-data/tag/forms/page-data.json",
    "revision": "ed9652339d0656c69ca1e6ae5603763f"
  },
  {
    "url": "page-data/tag/framework/page-data.json",
    "revision": "f565729b9cb164f6f328cb23d39105eb"
  },
  {
    "url": "page-data/tag/fun/page-data.json",
    "revision": "5ff0fbb7e22bf4c9bfbaa26e66538e65"
  },
  {
    "url": "page-data/tag/groups/page-data.json",
    "revision": "2775b4a419122d313949a2f4c1e3d6cd"
  },
  {
    "url": "page-data/tag/high-trust/page-data.json",
    "revision": "b893acfa5f06d84cd539916b69efe0ba"
  },
  {
    "url": "page-data/tag/hosted/page-data.json",
    "revision": "999625a4d4bcece73e0f5b470ee2817f"
  },
  {
    "url": "page-data/tag/html/page-data.json",
    "revision": "7cbe2d0cfbad9fa042ba8f84d3c0fa40"
  },
  {
    "url": "page-data/tag/javascript/page-data.json",
    "revision": "294c60cc573363b74f0d90511aafedcf"
  },
  {
    "url": "page-data/tag/jquery/page-data.json",
    "revision": "66d193cef7a3136706f061c8216e74cb"
  },
  {
    "url": "page-data/tag/js/page-data.json",
    "revision": "7979391c2583fc9215945c7d98ddcf99"
  },
  {
    "url": "page-data/tag/language/page-data.json",
    "revision": "5b4276180f9c1c5c1ae5f7024ba5b2c7"
  },
  {
    "url": "page-data/tag/lists/page-data.json",
    "revision": "bda731e7fab5f6f16ef295d16c79b55a"
  },
  {
    "url": "page-data/tag/loss/page-data.json",
    "revision": "79e417519d0feec0fee80e345d7f4555"
  },
  {
    "url": "page-data/tag/managed/page-data.json",
    "revision": "3e973dd35bcfbc6cdc8700d742b69275"
  },
  {
    "url": "page-data/tag/manager/page-data.json",
    "revision": "0aa917f34e66a5eb408d7a9452d3b6c6"
  },
  {
    "url": "page-data/tag/meetings/page-data.json",
    "revision": "8f058a462934279b7717f04c66b654a8"
  },
  {
    "url": "page-data/tag/menu/page-data.json",
    "revision": "05e29c042d9badf503ebaca97aa745e4"
  },
  {
    "url": "page-data/tag/micrositegen/page-data.json",
    "revision": "186b7f34250d905dd2d30cca530b44ba"
  },
  {
    "url": "page-data/tag/microsoft/page-data.json",
    "revision": "6ec528ad5470fcddefa50ad17f0cdb84"
  },
  {
    "url": "page-data/tag/microsoft-flow/page-data.json",
    "revision": "095540c903a2316fd617892d7e5149d0"
  },
  {
    "url": "page-data/tag/microsoft-graph/page-data.json",
    "revision": "e974f71c8d39de5df3a6a94b8bb81adc"
  },
  {
    "url": "page-data/tag/mobile/page-data.json",
    "revision": "40d4af12abe29211ed1b2004c329d7e2"
  },
  {
    "url": "page-data/tag/modern-experience/page-data.json",
    "revision": "0dd39ee1bcd8c593f4cdc140066e8898"
  },
  {
    "url": "page-data/tag/modern-view/page-data.json",
    "revision": "d8377272bb250e00f2c76dfb2e436a59"
  },
  {
    "url": "page-data/tag/modernexperience/page-data.json",
    "revision": "0d8bf39527a088a96499215230582ec6"
  },
  {
    "url": "page-data/tag/mui/page-data.json",
    "revision": "4d1a06e590cbb2eb4c755669c45e7384"
  },
  {
    "url": "page-data/tag/mvc/page-data.json",
    "revision": "eb80340fa78ae315b77a7eda02213a30"
  },
  {
    "url": "page-data/tag/navigation/page-data.json",
    "revision": "174c52a77a455d6075b986e57d41f6b8"
  },
  {
    "url": "page-data/tag/net/page-data.json",
    "revision": "26db25e1a79ed73e9479ad39647ec6db"
  },
  {
    "url": "page-data/tag/no-code/page-data.json",
    "revision": "9aac59ed793fba309685507362845d78"
  },
  {
    "url": "page-data/tag/object-oriented-design/page-data.json",
    "revision": "e76647a88c046a0732d235e9f0569996"
  },
  {
    "url": "page-data/tag/off365/page-data.json",
    "revision": "81ac4a11781deaabebc4d00e4aa70523"
  },
  {
    "url": "page-data/tag/office-365/page-data.json",
    "revision": "35ae5fb1c13cfe344b1fbac134fdf8b1"
  },
  {
    "url": "page-data/tag/office-web-apps/page-data.json",
    "revision": "8db62485569887a5767bb9acfa36e1ef"
  },
  {
    "url": "page-data/tag/onedrive/page-data.json",
    "revision": "8e8dc19ffc618fa8c0661f29453f4479"
  },
  {
    "url": "page-data/tag/online/page-data.json",
    "revision": "2a6922e04c0d8d0bbeea28ae1dc65c27"
  },
  {
    "url": "page-data/tag/onpremise/page-data.json",
    "revision": "7c9f47c2a1130575d1b1ed1aaf69abd1"
  },
  {
    "url": "page-data/tag/oop/page-data.json",
    "revision": "5dec56d2034a31e0c75e4210e069b658"
  },
  {
    "url": "page-data/tag/outlook/page-data.json",
    "revision": "baed8c181df92b0695b7c328c4fde096"
  },
  {
    "url": "page-data/tag/owa/page-data.json",
    "revision": "e574af7911477f675665de7665316f78"
  },
  {
    "url": "page-data/tag/page-approval-flow/page-data.json",
    "revision": "0c43a973c88312acbb6f3d6202695617"
  },
  {
    "url": "page-data/tag/pdf/page-data.json",
    "revision": "b2be71a661d3400809595a2030821f3c"
  },
  {
    "url": "page-data/tag/power-automate/page-data.json",
    "revision": "51a0008d5eacfd304b069cba3048c5ca"
  },
  {
    "url": "page-data/tag/powerapps/page-data.json",
    "revision": "c718b18a092235f58e128127b4ef73fe"
  },
  {
    "url": "page-data/tag/powerautomate/page-data.json",
    "revision": "6d21c0e1afdb2ddb0195b1becf3c34cc"
  },
  {
    "url": "page-data/tag/powerbi/page-data.json",
    "revision": "23d0a2e0cdc11bdcbbdda230843fd4d0"
  },
  {
    "url": "page-data/tag/powerpoint/page-data.json",
    "revision": "9f92b1ee9a770f3d29b3a9050f7b7e9a"
  },
  {
    "url": "page-data/tag/powershell/page-data.json",
    "revision": "1b2c64cf87089b3f0cc965f1a0047ca0"
  },
  {
    "url": "page-data/tag/preview/page-data.json",
    "revision": "97d2ab3ab840d0f7f85d21567d232ebe"
  },
  {
    "url": "page-data/tag/print/page-data.json",
    "revision": "fc7417333309f9d0917da2e8290e74b4"
  },
  {
    "url": "page-data/tag/properties/page-data.json",
    "revision": "180aa8332b9bf713bac6e2ff1b99037e"
  },
  {
    "url": "page-data/tag/provider/page-data.json",
    "revision": "83ee4b7b65514738bb18518d669ab6b2"
  },
  {
    "url": "page-data/tag/provisioning/page-data.json",
    "revision": "8d8bd4b86f640aae42c691538a7da5b8"
  },
  {
    "url": "page-data/tag/react/page-data.json",
    "revision": "034a52f45568c887a027a4b0a5423ff5"
  },
  {
    "url": "page-data/tag/remotework/page-data.json",
    "revision": "ee2ed9463ffbaac2611b1ee712f5820a"
  },
  {
    "url": "page-data/tag/requirement/page-data.json",
    "revision": "e0f7396450048b80e135ac14aaa661c0"
  },
  {
    "url": "page-data/tag/responsive/page-data.json",
    "revision": "54375d9678c86fd620983ff0e3cee8c8"
  },
  {
    "url": "page-data/tag/ribbon/page-data.json",
    "revision": "44edb0a41023a51894dda6c79f295edd"
  },
  {
    "url": "page-data/tag/roadmap/page-data.json",
    "revision": "8cca10137b690b08b5feb078deb6eac9"
  },
  {
    "url": "page-data/tag/rss/page-data.json",
    "revision": "9b6bb712b23e47fa5e7de1731202c746"
  },
  {
    "url": "page-data/tag/search/page-data.json",
    "revision": "8349e2eedd8c7d790015f1608cae2c1a"
  },
  {
    "url": "page-data/tag/search-service/page-data.json",
    "revision": "91dfefd86ac8e8fc48c0a5c20f87b89c"
  },
  {
    "url": "page-data/tag/sharepoint-columns/page-data.json",
    "revision": "5fc2f1ba3f89eb43f9445a8c22349245"
  },
  {
    "url": "page-data/tag/sharepoint-framework/page-data.json",
    "revision": "786e791ee86382a476f1b3680da62066"
  },
  {
    "url": "page-data/tag/sharepoint-online/page-data.json",
    "revision": "44f514ad80df302556bb00cfa88ef1b2"
  },
  {
    "url": "page-data/tag/sharepoint-patterns-and-practices/page-data.json",
    "revision": "7f4c4d3c96ca78211953c82164695572"
  },
  {
    "url": "page-data/tag/sharepoint-virtual-summit-2017/page-data.json",
    "revision": "3881ed6f8d79f14126283a5aa88c32ea"
  },
  {
    "url": "page-data/tag/snap/page-data.json",
    "revision": "5a5e63a645f6f1bd201dfe12185d99b6"
  },
  {
    "url": "page-data/tag/software-architecture/page-data.json",
    "revision": "c8e6464725125efedff721198e109a0c"
  },
  {
    "url": "page-data/tag/software-development/page-data.json",
    "revision": "9fe5a48799e23eb6d50966966a67a8be"
  },
  {
    "url": "page-data/tag/sp/page-data.json",
    "revision": "7336a3bc573042936d031e290323203f"
  },
  {
    "url": "page-data/tag/sp-pnp-js/page-data.json",
    "revision": "75d861fe5c3ddce12be6dde4f13d315d"
  },
  {
    "url": "page-data/tag/sp-ribbon-js/page-data.json",
    "revision": "1943b790819fc6759dcf54beacc3858f"
  },
  {
    "url": "page-data/tag/spfx/page-data.json",
    "revision": "5db75709c13152ac1ea185065bf6d7c1"
  },
  {
    "url": "page-data/tag/sql/page-data.json",
    "revision": "578a1eb6902ce57d898c108173571807"
  },
  {
    "url": "page-data/tag/sql-server/page-data.json",
    "revision": "52d14cd2da01a40edb632c7e0a991dc8"
  },
  {
    "url": "page-data/tag/sso/page-data.json",
    "revision": "8f2453776fc14213836a4fc14ef472db"
  },
  {
    "url": "page-data/tag/storage/page-data.json",
    "revision": "6195a294925b2fd2f7b872a42b2b2672"
  },
  {
    "url": "page-data/tag/syntex/page-data.json",
    "revision": "0585ab61380c1d9b455bf59dc32d4b51"
  },
  {
    "url": "page-data/tag/taxonomy/page-data.json",
    "revision": "09ba516c470d96de8a51e98e6eb4930a"
  },
  {
    "url": "page-data/tag/team/page-data.json",
    "revision": "5252d05f1ac964a75a94247d0db16db3"
  },
  {
    "url": "page-data/tag/team-site/page-data.json",
    "revision": "9a1ea0582a09bd4ee709076fb8b2080f"
  },
  {
    "url": "page-data/tag/teams/page-data.json",
    "revision": "05bcb5552cae207ff913e4b02a9ef768"
  },
  {
    "url": "page-data/tag/tiles/page-data.json",
    "revision": "144bb1b4b3204f3ce4fedc9b4cc0b3dc"
  },
  {
    "url": "page-data/tag/to-do/page-data.json",
    "revision": "bfada81284360a26ceac60aae13e9212"
  },
  {
    "url": "page-data/tag/troubleshoot/page-data.json",
    "revision": "2ae5647a0dca059fe692ebabf0eed3ae"
  },
  {
    "url": "page-data/tag/typescript/page-data.json",
    "revision": "78330e011c6e390192cd7f98842449be"
  },
  {
    "url": "page-data/tag/versioning/page-data.json",
    "revision": "f6aa34f83a2c92ae80b8e7abd68746a7"
  },
  {
    "url": "page-data/tag/view-formatting/page-data.json",
    "revision": "688cd76d5cf3dfb0313f109e4d05b608"
  },
  {
    "url": "page-data/tag/views/page-data.json",
    "revision": "0f130b3bab3f504c865f55e3a52c90d9"
  },
  {
    "url": "page-data/tag/virtualsummit/page-data.json",
    "revision": "f8251ac42178a815fe210600ccbabfac"
  },
  {
    "url": "page-data/tag/visual-studio/page-data.json",
    "revision": "a79858318b16ee52026155d933ae3e39"
  },
  {
    "url": "page-data/tag/wcf/page-data.json",
    "revision": "8739951748b1405424e0f94606d6314c"
  },
  {
    "url": "page-data/tag/webhooks/page-data.json",
    "revision": "71f3941de8ff6f56715933a78b98d6d6"
  },
  {
    "url": "page-data/tag/webpart/page-data.json",
    "revision": "76b10f4c3d28be9aadbd1b226685ecff"
  },
  {
    "url": "page-data/tag/wopi/page-data.json",
    "revision": "8f8eb81dd53660afb7cee0f43cb324e0"
  },
  {
    "url": "page-data/tag/wopi-host/page-data.json",
    "revision": "d0e3aaaf12528f9050ee409dec372bd4"
  },
  {
    "url": "component---src-templates-blog-category-posts-tsx-15a5f269022bb556624d.js"
  },
  {
    "url": "page-data/category/addins/page-data.json",
    "revision": "e5ebcede70e3e9de510ab40d0f30de5f"
  },
  {
    "url": "page-data/category/dvs/page-data.json",
    "revision": "bcd1ff39b389f1d12b4c601c9a84e827"
  },
  {
    "url": "page-data/category/js/page-data.json",
    "revision": "7901c3385a7d124b6aa9a8454f2bda55"
  },
  {
    "url": "page-data/category/microsoft/page-data.json",
    "revision": "8a8280e276627d1c8d62bc5f00f3d2ab"
  },
  {
    "url": "page-data/category/net/page-data.json",
    "revision": "15a5c6da49fedb26be59d299c61b1bd2"
  },
  {
    "url": "page-data/category/netcore/page-data.json",
    "revision": "eb0248d89fec034e43fd1e72a980848c"
  },
  {
    "url": "page-data/category/off365/page-data.json",
    "revision": "67175c08183083faea727804b932d3ee"
  },
  {
    "url": "page-data/category/react/page-data.json",
    "revision": "3f985522f213e5b9583662163154949b"
  },
  {
    "url": "page-data/category/sp/page-data.json",
    "revision": "34959e585b3f3fd243e57bc9d4ab99d6"
  },
  {
    "url": "page-data/category/spfx/page-data.json",
    "revision": "6873475de415cb7f248fc1c0f3fa0c4b"
  },
  {
    "url": "page-data/category/teams/page-data.json",
    "revision": "8f872825e0c670aea2e36c325ffd2ec0"
  },
  {
    "url": "page-data/category/tips-and-tricks/page-data.json",
    "revision": "9dbb4695bed5eace912111473d00f4eb"
  },
  {
    "url": "page-data/category/uncategorized/page-data.json",
    "revision": "f4b8714614840ce53ab03149812baa09"
  },
  {
    "url": "component---src-templates-blog-author-posts-tsx-570d586bb803be011ee1.js"
  },
  {
    "url": "page-data/author/admin/page-data.json",
    "revision": "35852b40c58f5450f88c55806a00c89a"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "506a21fe9d699118c4ef78179af0d0f0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-c1021e46a52f233822a2.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
