import React from 'react'
import Box from 'ui-box'
import AddIcon from '../src/AddIcon'
import ArrowIcon from '../src/ArrowIcon'
import CheckCircleIcon from '../src/CheckCircleIcon'
import CloseIcon from '../src/CloseIcon'
import CogIcon from '../src/CogIcon'
import DangerIcon from '../src/DangerIcon'
import Icon from '../src/Icon'
import QuestionIcon from '../src/QuestionIcon'
import SearchIcon from '../src/SearchIcon'
import TriangleIcon from '../src/TriangleIcon'
import WarningIcon from '../src/WarningIcon'

/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import sourceAddIcon from '!raw-loader!../src/AddIcon'
import sourceArrowIcon from '!raw-loader!../src/ArrowIcon'
import sourceCheckCircleIcon from '!raw-loader!../src/CheckCircleIcon'
import sourceCloseIcon from '!raw-loader!../src/CloseIcon'
import sourceCogIcon from '!raw-loader!../src/CogIcon'
import sourceDangerIcon from '!raw-loader!../src/DangerIcon'
import sourceIcon from '!raw-loader!../src/Icon'
import sourceQuestionIcon from '!raw-loader!../src/QuestionIcon'
import sourceSearchIcon from '!raw-loader!../src/SearchIcon'
import sourceTriangleIcon from '!raw-loader!../src/TriangleIcon'
import sourceWarningIcon from '!raw-loader!../src/WarningIcon'
/* eslint-enable import/no-unresolved, import/no-webpack-loader-syntax */

/**
 * Code examples
 */
import exampleAddIconBasic from './examples/AddIcon-basic.example'
import exampleArrowIconBasic from './examples/ArrowIcon-basic.example'
import exampleCheckCircleIconBasic from './examples/CheckCircleIcon-basic.example'
import exampleCloseIconBasic from './examples/CloseIcon-basic.example'
import exampleCogIconBasic from './examples/CogIcon-basic.example'
import exampleDangerIconBasic from './examples/DangerIcon-basic.example'
import exampleIconBasic from './examples/Icon-basic.example'
import exampleQuestionIconBasic from './examples/QuestionIcon-basic.example'
import exampleSearchIconBasic from './examples/SearchIcon-basic.example'
import exampleTriangleIconBasic from './examples/TriangleIcon-basic.example'
import exampleWarningIconBasic from './examples/WarningIcon-basic.example'

const title = 'Icons'
const subTitle = 'A set of icons.'

const introduction = (
  <div>
    <p>
      Evergreen currently comes with only of a handful of icons. Currently the
      icons are wrapped inside of a box instead of exposing the icon as a svg.
      There might be some breaking changes in the future as we learn more about
      how icons are being used.
    </p>
  </div>
)

const appearanceOptions = null

const scope = {
  Box,
  AddIcon,
  ArrowIcon,
  CheckCircleIcon,
  CloseIcon,
  CogIcon,
  DangerIcon,
  Icon,
  QuestionIcon,
  SearchIcon,
  TriangleIcon,
  WarningIcon
}

const components = [
  {
    name: 'Icon',
    source: sourceIcon,
    description: (
      <p>
        The <code>Icon</code> component is the wrapping component around the{' '}
        <code>svg</code>.
      </p>
    ),
    examples: [
      {
        title: 'Basic Icon Example',
        codeText: exampleIconBasic,
        scope
      }
    ]
  },
  {
    name: 'AddIcon',
    source: sourceAddIcon,
    description: (
      <p>
        The <code>AddIcon</code> component.
      </p>
    ),
    examples: [
      {
        title: 'Basic AddIcon Example',
        codeText: exampleAddIconBasic,
        scope
      }
    ]
  },
  {
    name: 'ArrowIcon',
    source: sourceArrowIcon,
    description: (
      <p>
        The <code>ArrowIcon</code> component.
      </p>
    ),
    examples: [
      {
        title: 'Basic ArrowIcon Example',
        codeText: exampleArrowIconBasic,
        scope
      }
    ]
  },
  {
    name: 'CheckCircleIcon',
    source: sourceCheckCircleIcon,
    description: (
      <p>
        The <code>CheckCircleIcon</code> component.
      </p>
    ),
    examples: [
      {
        title: 'Basic CheckCircleIcon Example',
        codeText: exampleCheckCircleIconBasic,
        scope
      }
    ]
  },
  {
    name: 'CloseIcon',
    source: sourceCloseIcon,
    description: (
      <p>
        The <code>CloseIcon</code> component.
      </p>
    ),
    examples: [
      {
        title: 'Basic CloseIcon Example',
        codeText: exampleCloseIconBasic,
        scope
      }
    ]
  },
  {
    name: 'CogIcon',
    source: sourceCogIcon,
    description: (
      <p>
        The <code>CogIcon</code> component.
      </p>
    ),
    examples: [
      {
        title: 'Basic CogIcon Example',
        codeText: exampleCogIconBasic,
        scope
      }
    ]
  },
  {
    name: 'DangerIcon',
    source: sourceDangerIcon,
    description: (
      <p>
        The <code>DangerIcon</code> component.
      </p>
    ),
    examples: [
      {
        title: 'Basic DangerIcon Example',
        codeText: exampleDangerIconBasic,
        scope
      }
    ]
  },
  {
    name: 'QuestionIcon',
    source: sourceQuestionIcon,
    description: (
      <p>
        The <code>QuestionIcon</code> component.
      </p>
    ),
    examples: [
      {
        title: 'Basic QuestionIcon Example',
        codeText: exampleQuestionIconBasic,
        scope
      }
    ]
  },
  {
    name: 'SearchIcon',
    source: sourceSearchIcon,
    description: (
      <p>
        The <code>SearchIcon</code> component.
      </p>
    ),
    examples: [
      {
        title: 'Basic SearchIcon Example',
        codeText: exampleSearchIconBasic,
        scope
      }
    ]
  },
  {
    name: 'TriangleIcon',
    source: sourceTriangleIcon,
    description: (
      <p>
        The <code>TriangleIcon</code> component.
      </p>
    ),
    examples: [
      {
        title: 'Basic TriangleIcon Example',
        codeText: exampleTriangleIconBasic,
        scope
      }
    ]
  },
  {
    name: 'WarningIcon',
    source: sourceWarningIcon,
    description: (
      <p>
        The <code>WarningIcon</code> component.
      </p>
    ),
    examples: [
      {
        title: 'Basic WarningIcon Example',
        codeText: exampleWarningIconBasic,
        scope
      }
    ]
  }
]

export default {
  title,
  subTitle,
  introduction,
  appearanceOptions,
  components
}
