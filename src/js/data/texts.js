const texts = {
  en : {
    languageName    : 'English',
    title           : 'Inspectrum',
    rgbName         : 'RGB',
    rgbRName        : 'Red',
    rgbGName        : 'Green',
    rgbBName        : 'Blue',
    hslName         : 'HSL',
    hslHName        : 'Hue',
    hslSName        : 'Saturation',
    hslLName        : 'Lightness',
    hexName         : 'Hex',
    wcagLumName     : 'WCAG',
    addColor        : 'Add',
    deleteColor     : 'Delete',
    contrastPass    : 'Pass',
    contrastCaution : 'Caution',
    contrastFail    : 'Fail',
    previewHeading  : 'This is preview text.',
    previewText     : 'This is longer and smaller preview text.',
    logoAlt         : 'Inspectrum logo',
    textSizeToggle  : 'Check as large text',
    closeModalAlt   : 'Close',
    previewAlt      : 'Change preview color',
    license         : 'License',
    modalContent    : {
      license : {
        title : 'License',
        text  : '',

        sections : [
          {
            title : 'Inspectrum',
            text  : `Copyright 2021 Taiga Yamada

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
          },
          {
            title : 'Fluent UI System Icons',
            text  : `MIT License

Copyright (c) 2020 Microsoft Corporation

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`
          },
          {
            title : 'normalize.css',
            text  : `The MIT License (MIT)

Copyright © Nicolas Gallagher and Jonathan Neal

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
          },
          {
            title : 'React',
            text  : `MIT License

Copyright (c) Facebook, Inc. and its affiliates.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`
          },
          {
            title : 'react-dom',
            text  : `MIT License

Copyright (c) Facebook, Inc. and its affiliates.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`
          },
          {
            title : 'React Redux',
            text  : `The MIT License (MIT)

Copyright (c) 2015-present Dan Abramov

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
          },
          {
            title : 'Redux',
            text  : `The MIT License (MIT)

Copyright (c) 2015-present Dan Abramov

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
`
          },
          {
            title : 'Noto Sans',
            text  : `This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
http://scripts.sil.org/OFL


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded,
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.`
          }
        ]
      },
      rgb : {
        title : 'RGB format',
        text  : 'RGB format defines a color using a combination of 3 values: red, green, and blue. These 3 values represent the primary colors of light. By mixing these primary colors, other nuanced colors could be made. To be precise, the RGB format supported here is called sRGB. The 3 values range between 0 and 255, with greater values corresponding to stronger light.'
      },
      hsl : {
        title : 'HSL format',
        text  : 'HSL format defines a color using a combination of 3 values. However, unlike RGB, these values do not each directly correspond to specific wavelengths of light. The 3 values instead stand for hue, saturation, and lightness.',

        sections : [
          {
            title : 'Hue',
            text  : 'Hue roughly translates to differences between colors described in our standard vocabulary, such as "yellow" and "blue". Hue takes the form of an angle, ranging from 0 to 360. 0 corresponds to red, 120 is for green, and blue sits at 240. Once you complete the circle and reach 360, the hue returns to pure red. Hues in-between these primary colors are represented by intermediate angles.'
          },
          {
            title : 'Saturation',
            text  : 'Saturation dictates the vibrancy of the color. It takes a value between 0 and 100, 0 meaning greyscale and 100 meaning full of color. However, it needs to be noted that the vibrancy of the final calculated color is also affected by the lightness. The lightest color human eyes can perceive is white. The darkest is black. Thus, at extreme values of lightness, colors with high saturation can still appear greyscale.'
          },
          {
            title : 'Lightness',
            text  : 'Lightness, as the name suggests, is the measure of how bright a color is. Much like saturation, it spans the value of 0 to 100. 0 corresponds to complete black and 100 results in complete white. While similar, lightness in HSL is not equivalent to relative luminance in WCAG. Lightness in HSL is a mathematical calculation of the amount of light, whereas relative luminance in WCAG is supposed to represent the human perception of it.'
          }
        ]
      },
      hex : {
        title : 'Hexadecimal',
        text  : 'Hexadecimal format, more commonly known as "hex", describes the color using a string of six characters. The exact detail of how this is done is slightly complex, but is not neccesary to use this format. The biggest advantage of hex compared to other formats is that it is short. Both RGB and HSL require 3 values to define a color, but hex only uses 1. So, this format is often employed to share a color that has already been chosen, rather than to pick a new color.',

        sections : [
          {
            title : 'Technical detail',
            text  : 'Each digit can have a value of 0 to 9, or a to f. This means that each digit has 16 possible values it can take, hence the name of the format. 2 digits of hexadecimal can represent a number between 0 to 255, matching the boundary for sRGB values. First two values correspond to red. Green and blue follows. The "#" at the start of the value has no meaning by itself, but signifies that the letters that follow them are supposed to be in the hexadecimal format. Technically, there is a shorthand syntax for hexadecimal whereby you can abbreviate the second digit if it is identical to the first. For example, #ffffff can also be written as #fff. However, for simplicity\'s sake, it is not recognized in this tool.'
          }
        ]
      },
      wcagLum : {
        title : 'WCAG relative luminance',
        text  : 'WCAG stands for Web Content Accessibility Guideline, an international standard to ensure that digital content can be understood by everyone. Relative luminance is one of the measures introduced in that guideline, representing the human perception of brightness. Background and foreground need to have enough contrast between their relative luminances to make sure that people with different perceptions of color can also read the texts. Inspectrum automatically checks the differences between the colors and displays the result in the matrix on the right. Checkmark means the colors have sufficient contrast. Question mark means that the contrast only reaches the minimum level. Cross means that the colors fail the contrast check entirely. WCAG requres different amount of contrast for small and large text. Large text means font size above 18 points for normal weights, and above 14 points for bolder weights. This can be toggled from the top bar. For more details about the guidelines, please check the text of WCAG at https://www.w3.org/TR/WCAG21/.'
      }
    }

  },
  ja : {
    languageName    : '日本語',
    title           : 'インスペクトラム',
    rgbName         : 'RGB',
    rgbRName        : '赤',
    rgbGName        : '緑',
    rgbBName        : '青',
    hslName         : 'HSL',
    hslHName        : '色相',
    hslSName        : '彩度',
    hslLName        : '輝度',
    hexName         : 'Hex',
    wcagLumName     : 'WCAG',
    addColor        : '追加',
    deleteColor     : '削除',
    contrastPass    : '合格',
    contrastCaution : '注意',
    contrastFail    : '不合格',
    previewHeading  : '見本の文章',
    previewText     : 'より長くて小さい文字の見本の文章。',
    logoAlt         : 'インスペクトラムのロゴ',
    textSizeToggle  : '大きい文字として計算する',
    closeModalAlt   : '閉じる',
    previewAlt      : '見本の色を変更する',
    license         : 'ライセンス',
    modalContent    : {
      rgb : {
        title : 'RGB形式',
        text  : 'RGB形式は赤、緑、青の3つの値の組み合わせで色を定義します。この3つの値は光の三原色を表しています。これらの色を混ぜ合わせることでより複雑な色を表現することができます。厳密にはここで表記されているRGB形式とはsRGBのことです。各値は0~255の間で設定することができ、大きい値ほど光が強いことになります。'
      },
      hsl : {
        title : 'HSL形式',
        text  : 'HSL形式は3つの値の組み合わせで色を指定します。ただし、RGB形式とは違い、これらの3つの値は特定の波長をそれぞれ表しているわけではありません。表しているのは色相、彩度、輝度の三つです。',

        sections : [
          {
            title : '色相(Hue)',
            text  : '色相の違いは「青」や「黄色」など、我々が一般に色の名前として呼び分けているものです。色相は角度として表記され、0~360の間の値を取ります。0が赤、120が緑、そして240が青に相当します。一周回って360になると、色相は再び赤に戻ります。 三原色の間の色は中間の角度で表されます。'
          },
          {
            title : '彩度(Saturation)',
            text  : '彩度は色の鮮やかさを決める値で、0~100の間の値を取ります。0だと白黒、100だと最も色鮮やかな状態を示します。しかし、最終的に算出される色の鮮やかさは輝度にも影響されます。人間の目が知覚できる最も明るい色は白です。また最も暗い色は黒です。よって、輝度が極端に高いもしくは低い値を取っている場合、彩度と関係なく色は白黒に近づきます。'
          },
          {
            title : '輝度(Lightness)',
            text  : '輝度は色の明るさを表しています。彩度と同じように、輝度も0~100の間の値を取ります。0が完全な黒、100が完全な白に相当します。似ていますが、HSL形式の輝度はWCAGの相対輝度とは異なるものです。HSL形式の輝度は数学的に算出できる光の量なのに対し、WCAGの相対輝度は人がそれをどう感じるかを表そうとした指標です。'
          }
        ]
      },
      hex : {
        title    : '16進法(Hexadecimal)',
        text     : '16進法は一般的にhexと呼ばれます。Hexは6桁の数字で色を指定します。どのようにして色を実際に指定しているのかの説明はやや複雑になりますが、それを知らずともこの形式を使うことができます。他の色の形式と比べての一番の長所は短い点です。RGBとHSL形式は両方3つの値を組み合わせる必要がありますが、hexは一つの値だけで色を定義します。よって、この形式は新しい色を選ぼうとする際よりも、既に選定済みの色を他の人と共有するために使われます。',
        sections : [
          {
            title : '詳細',
            text  : '各桁は0~9、もしくはa~fの値を取ることができます。つまり各桁がとることのできる値が16種類あるので16進法というわけです。16進法の数字二桁は十進法に置き換えると0~255の値を表すことができます。これはsRGBの値域と一致します。 最初の二桁が赤を表しており、緑、青と続きます。 「#」の記号はそれ自体には意味がなく、後に続くのが16進法だということを示しています。正確には、16進法で色を表記する場合は一桁目と二桁目が同じ値の時には省略できるという決まりがあります。例えば、#ffffffは#fffとしても書くことができます。しかし、簡略化を優先しているため、このツールではその省略はできません。'
          }
        ]
      },
      wcagLum : {
        title : 'WCAG相対輝度',
        text  : 'WCAGとはウェブコンテンツアクセシビリティガイドラインの略です。この国際基準はデジタルコンテンツがすべての人にとって分かりやすいものであるかを確認するものです。相対輝度はそのガイドラインの中で定義されている指標の一つで、人がどのように明るさを感じるかを示しています。 背景と前景の相対輝度の間に十分なコントラストを確保することで、多様な色覚を持ったすべての人にとって見やすくなります。Inspectrumは複数の色の間のコントラストを自動計算し、右側の表に表示します。チェックマークは十分なコントラストがあることを示しています。クエスチョンマークはコントラストが最低限の基準しか満たしていないことを示しています。バツ印はその色の組み合わせが完全にコントラストの基準を下回っていることを示しています。WCAGは大きい文字と小さい文字によって異なったコントラストの基準を設けています。ここでいう大きい文字とは、通常の太さでは18ポイント以上、より太いものでは14ポイント以上の大きさの文字を指します。この設定は上のバーから変更することができます。WCAGの詳細は基準の本文をご確認ください。WCAGの英語の本文はhttps://www.w3.org/TR/WCAG21/、非公式の日本語訳はhttps://waic.jp/docs/WCAG21/にあります。'
      }
    }

  }
};

export default texts;