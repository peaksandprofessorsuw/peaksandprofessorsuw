#!/bin/sh
# One-time helper: downloads the club's photos from the old Squarespace site
# into the images/ folder. Run it BEFORE the Squarespace subscription ends.
#
# Mac: open Terminal, type  sh   (with a space), drag this file into the window, press Enter.
# Windows: open this folder in Git Bash and run:  sh get-photos.sh
#
# Afterwards you can delete this file.

cd "$(dirname "$0")/images" || exit 1
B="https://images.squarespace-cdn.com/content/v1/632cf877b258dc3e335d6baf"

get() { echo "Downloading $1"; curl -sSL -o "$1" "$B/$2?format=1500w"; }

get logo.png     "0809c9e1-a87c-4ddc-98dd-21afbaa9e31a/Copy+of+Washington+Banner+Logo+6.png"
get hero.jpg     "12c86bb9-f265-456f-a14a-68800cf8f474/20240921_163244_E1EFE2.jpg"
get group.jpg    "f6b6ba3d-5659-452a-b364-c138e889374b/20220927_204723-71e5.jpg"
get about.jpg    "dc259a44-a5b0-4400-b87d-4de3e82ab2ec/messages_0+%2823%29.jpg"
get trail-1.jpg  "0a3fa381-0dc3-4a5e-86c7-f500e92cec96/20230130_193513_EB80FF.jpeg"
get trail-2.jpg  "2c7ff995-5249-48f1-a64b-708ebc61436e/20230507_160109_E6C73C.jpeg"

# Extra photos from the old site, saved in case you want to swap any in
mkdir -p extra
get extra/hike-2023-04.jpg "7093776d-160d-48ba-ba04-1f382d2250ef/20230429_154956_E361B1.jpeg"
get extra/hike-2023-05.jpg "5d9ecd36-a32d-496c-8b3b-de02ab0dd7f5/20230527_172707_E31A1B.jpeg"
get extra/old-header.png   "c1c4582b-2562-4f1e-82bb-24e12985838b/Peaks+Website+Header.png"

echo "Done. Photos are in the images folder."
