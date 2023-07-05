package vn.com.pvcombank.service.dto;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import vn.com.pvcombank.web.rest.TestUtil;

class OperaUnitDTOTest {

    @Test
    void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(OperaUnitDTO.class);
        OperaUnitDTO operaUnitDTO1 = new OperaUnitDTO();
        operaUnitDTO1.setId(1L);
        OperaUnitDTO operaUnitDTO2 = new OperaUnitDTO();
        assertThat(operaUnitDTO1).isNotEqualTo(operaUnitDTO2);
        operaUnitDTO2.setId(operaUnitDTO1.getId());
        assertThat(operaUnitDTO1).isEqualTo(operaUnitDTO2);
        operaUnitDTO2.setId(2L);
        assertThat(operaUnitDTO1).isNotEqualTo(operaUnitDTO2);
        operaUnitDTO1.setId(null);
        assertThat(operaUnitDTO1).isNotEqualTo(operaUnitDTO2);
    }
}
