package vn.com.pvcombank.service.dto;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import vn.com.pvcombank.web.rest.TestUtil;

class ApiInfoDTOTest {

    @Test
    void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(ApiInfoDTO.class);
        ApiInfoDTO apiInfoDTO1 = new ApiInfoDTO();
        apiInfoDTO1.setId(1L);
        ApiInfoDTO apiInfoDTO2 = new ApiInfoDTO();
        assertThat(apiInfoDTO1).isNotEqualTo(apiInfoDTO2);
        apiInfoDTO2.setId(apiInfoDTO1.getId());
        assertThat(apiInfoDTO1).isEqualTo(apiInfoDTO2);
        apiInfoDTO2.setId(2L);
        assertThat(apiInfoDTO1).isNotEqualTo(apiInfoDTO2);
        apiInfoDTO1.setId(null);
        assertThat(apiInfoDTO1).isNotEqualTo(apiInfoDTO2);
    }
}
